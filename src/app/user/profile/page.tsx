'use client';
import React, { useEffect, useState } from 'react';
import { userService } from '../../services/userService';
import { reservationService } from '../../services/reservationService';
import './profile.css';
import { useRouter } from 'next/navigation';
import ReservationList from '../../components/ReservationList';

const UserProfilePage = () => {
  const [profile, setProfile] = useState<any>(null);
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const user = await userService.getProfile();
        setProfile(user);
        setForm({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber || '',
        });
        const res = await reservationService.getUserReservations();
        setReservations(res);
      } catch (err: any) {
        setError('Error al cargar los datos del perfil.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // Escuchar cambios en la ruta para recargar reservas automáticamente
    const handleRouteChange = () => {
      fetchData();
    };
    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await userService.updateProfile(form);
      setProfile({ ...profile, ...form });
      setEditMode(false);
    } catch (err: any) {
      setError('Error al guardar los cambios.');
    } finally {
      setSaving(false);
    }
  };

  // Botón para actualizar reservas manualmente
  const handleRefreshReservations = async () => {
    setLoading(true);
    try {
      const res = await reservationService.getUserReservations();
      setReservations(res);
    } catch (err: any) {
      setError('Error al actualizar las reservas.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReservation = async (id: number) => {
    setLoading(true);
    try {
      await reservationService.cancelReservation(id);
      setReservations(reservations.filter((r) => r.id !== id));
    } catch (err) {
      setError('Error al eliminar la reserva.');
    } finally {
      setLoading(false);
    }
  };

  const filtered = reservations.filter((res) => {
    const roomMatch = res.room?.name.toLowerCase().includes(search.toLowerCase());
    const dateMatch = searchDate === '' || (res.checkInDate && res.checkOutDate &&
      res.checkInDate.slice(0, 10) <= searchDate && res.checkOutDate.slice(0, 10) >= searchDate);
    return roomMatch && dateMatch;
  });

  if (loading) return <div>Cargando perfil...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{width:'100vw',minHeight:'100vh',background:'#f5f7fa',fontFamily:"'Inter','Segoe UI',sans-serif"}}>
      <div className="profile-container" style={{maxWidth:'1200px',margin:'40px auto',padding:'40px 32px',background:'#fff',borderRadius:20,boxShadow:'0 2px 24px rgba(44,82,130,0.10)'}}>
        <h2 className="profile-title" style={{fontSize:'2.3rem',marginBottom:32,color:'#1a365d',fontWeight:800,letterSpacing:'-1px'}}>Perfil de Usuario</h2>
        {editMode ? (
          <form onSubmit={handleSave} className="profile-form">
            <div className="form-group">
              <label>Nombre:</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
            </div>
            <div className="form-actions">
              <button type="submit" disabled={saving}>{saving ? 'Guardando...' : 'Guardar'}</button>
              <button type="button" onClick={() => setEditMode(false)} disabled={saving}>Cancelar</button>
            </div>
          </form>
        ) : (
          <div className="profile-info" style={{marginBottom:32,background:'#f7fafc',padding:24,borderRadius:12,boxShadow:'0 1px 6px rgba(44,82,130,0.04)'}}>
            <p style={{fontWeight:600,fontSize:'1.1rem',color:'#2c5282',marginBottom:8}}><b>Nombre:</b> {profile.firstName}</p>
            <p style={{fontWeight:600,fontSize:'1.1rem',color:'#2c5282',marginBottom:8}}><b>Apellido:</b> {profile.lastName}</p>
            <p style={{fontWeight:600,fontSize:'1.1rem',color:'#2c5282',marginBottom:8}}><b>Email:</b> {profile.email}</p>
            <p style={{fontWeight:600,fontSize:'1.1rem',color:'#2c5282',marginBottom:8}}><b>Teléfono:</b> {profile.phoneNumber || '-'}</p>
            <button className="edit-btn" onClick={() => setEditMode(true)} style={{marginTop:18,background:'#38a169',fontWeight:700,fontSize:'1.1rem',padding:'10px 28px'}}>Editar perfil</button>
          </div>
        )}
        <h3 className="profile-subtitle" style={{fontSize:'1.5rem',marginBottom:18,color:'#2c5282',fontWeight:700}}>Historial de Reservas</h3>
        <div style={{width:'100%',overflowX:'auto',marginBottom:24}}>
          <ReservationList reservas={reservations} loading={loading} onDelete={handleDeleteReservation} />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage; 
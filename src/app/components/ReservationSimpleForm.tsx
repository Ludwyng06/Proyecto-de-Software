'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { reservationService } from '../services';
import { useAuth } from '../context/AuthContext';

interface Props {
  roomId?: string;
  rooms?: any[];
}

export default function ReservationSimpleForm({ roomId, rooms }: Props) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    roomId: '',
    checkInDate: '',
    checkOutDate: '',
    totalPrice: '',
    status: 'PENDING',
    specialRequests: '',
    serviceIds: '',
    userId: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (roomId) {
      setForm((prev) => ({ ...prev, roomId: roomId }));
    }
    if (user?.id) {
      setForm((prev) => ({ ...prev, userId: String(user.id) }));
    }
  }, [roomId, user]);

  useEffect(() => {
    if (rooms && form.roomId && form.checkInDate && form.checkOutDate) {
      const room = rooms.find(r => String(r.id) === String(form.roomId));
      if (room) {
        const checkIn = new Date(form.checkInDate);
        const checkOut = new Date(form.checkOutDate);
        const nights = Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)));
        const total = nights * Number(room.price);
        setForm(prev => ({ ...prev, totalPrice: String(total) }));
        return;
      }
    }
    setForm(prev => ({ ...prev, totalPrice: '' }));
  }, [form.roomId, form.checkInDate, form.checkOutDate, rooms]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      // Intenta crear la reserva con los campos actuales
      const data = {
        roomId: form.roomId ? Number(form.roomId) : undefined,
        checkInDate: form.checkInDate || undefined,
        checkOutDate: form.checkOutDate || undefined,
        totalPrice: form.totalPrice ? Number(form.totalPrice) : undefined,
        userId: form.userId || undefined,
        status: form.status || undefined,
        specialRequests: form.specialRequests ?? "",
        serviceIds: form.serviceIds ? form.serviceIds.split(',').map(id => id.trim()).filter(Boolean) : []
      };
      console.log('Datos enviados a la reserva:', data);
      console.log('Usuario autenticado:', user);
      const res = await reservationService.createReservation(data);
      setSuccess('Reserva creada con éxito. ID: ' + res.id);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        background: 'var(--color-surface, #fff)',
        borderRadius: 12,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        padding: '2.5rem 2rem',
        fontFamily: 'var(--font-main, Inter, Arial, sans-serif)',
        color: 'var(--color-text, #222)',
        width: '100%',
      }}
    >
      <h2 style={{
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 8,
        color: 'var(--color-primary-dark, #1a365d)',
        fontFamily: 'var(--font-main, Inter, Arial, sans-serif)',
        letterSpacing: '-1px',
      }}>
        Formulario de Reserva Simple
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            ID de Habitación (roomId):
            <input
              type="number"
              name="roomId"
              value={form.roomId}
              onChange={handleChange}
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)' }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            Fecha de Entrada (checkInDate):
            <input
              type="date"
              name="checkInDate"
              value={form.checkInDate}
              onChange={handleChange}
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)' }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            Fecha de Salida (checkOutDate):
            <input
              type="date"
              name="checkOutDate"
              value={form.checkOutDate}
              onChange={handleChange}
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)' }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            Precio Total (totalPrice):
            <input
              type="number"
              name="totalPrice"
              value={form.totalPrice}
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)', background: '#f5f5f5' }}
              disabled
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            Estado (status):
            <input
              type="text"
              name="status"
              value={form.status}
              disabled
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)', background: '#f5f5f5' }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            Solicitudes Especiales (specialRequests):
            <textarea
              name="specialRequests"
              value={form.specialRequests}
              onChange={handleChange}
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)', background: '#f5f5f5' }}
              disabled
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            Usuario (userId):
            <input
              type="text"
              name="userId"
              value={form.userId}
              disabled
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)', background: '#f5f5f5' }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <label style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>
            Servicios (serviceIds):
            <input
              type="text"
              name="serviceIds"
              value={form.serviceIds}
              disabled
              className="form-control"
              style={{ width: '100%', marginTop: 4, fontSize: 18, padding: '0.7rem', borderRadius: 6, border: '1px solid var(--color-border, #cbd5e1)', background: '#f5f5f5' }}
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: 18,
          padding: '1rem 0',
          fontSize: 20,
          fontWeight: 600,
          borderRadius: 8,
          border: 'none',
          background: 'var(--color-accent, #3182ce)',
          color: 'var(--color-surface, #fff)',
          fontFamily: 'var(--font-main, Inter, Arial, sans-serif)',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s',
          width: '100%',
          boxShadow: '0 2px 8px rgba(49,130,206,0.07)',
        }}
      >
        {loading ? 'Enviando...' : 'Crear Reserva'}
      </button>
      {error && <div style={{ color: 'var(--color-error, #e53e3e)', marginTop: 8, fontWeight: 500 }}>{error}</div>}
      {success && <div style={{ color: 'var(--color-success, #38a169)', marginTop: 8, fontWeight: 500 }}>{success}</div>}
      <div style={{ fontSize: 15, color: 'var(--color-text-light, #888)', marginTop: 18 }}>
        Puedes dejar campos vacíos para provocar errores y ver la validación del backend.
      </div>
    </form>
  );
} 
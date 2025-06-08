'use client';
import { useState, useEffect } from 'react';
import ReservationSimpleForm from '../../components/ReservationSimpleForm';
import { roomService } from '../../services';

export default function ReservationFormPage() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('');
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    roomService.getAllRooms()
      .then((data) => setRooms(data))
      .catch(() => setError('No se pudieron cargar las habitaciones'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      {loading ? (
        <div style={{ textAlign: 'center', margin: 40 }}>Cargando habitaciones...</div>
      ) : error ? (
        <div style={{ color: 'red', textAlign: 'center', margin: 40 }}>{error}</div>
      ) : (
        <div
          className="reservas-grid"
          style={{
            display: 'flex',
            gap: 24,
            marginBottom: 32,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {rooms.map((habitacion) => {
            let imageUrl = '/images/habitacion-estandar.jpg';
            if (Array.isArray(habitacion.imageUrls)) {
              imageUrl = habitacion.imageUrls[0] || imageUrl;
            } else if (typeof habitacion.imageUrls === 'string' && habitacion.imageUrls.startsWith('[')) {
              try {
                const arr = JSON.parse(habitacion.imageUrls);
                if (Array.isArray(arr) && arr.length > 0) imageUrl = arr[0];
              } catch {}
            }
            return (
              <div
                key={habitacion.id}
                className="reserva-card"
                style={{ border: selectedRoomId == String(habitacion.id) ? '2px solid #3182ce' : '1px solid #ccc', borderRadius: 8, cursor: 'pointer', width: 280 }}
                onClick={() => setSelectedRoomId(String(habitacion.id))}
              >
                <img
                  src={imageUrl}
                  alt={habitacion.name}
                  className="reserva-img"
                  style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
                <div className="reserva-content" style={{ padding: 16 }}>
                  <h2 style={{ fontSize: 20, marginBottom: 8 }}>{habitacion.name}</h2>
                  <p className="reserva-desc" style={{ fontSize: 15, marginBottom: 8 }}>{habitacion.description}</p>
                  <p className="reserva-precio" style={{ fontWeight: 600 }}>Desde ${habitacion.price}/noche</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <ReservationSimpleForm roomId={selectedRoomId} rooms={rooms} />
    </div>
  );
} 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ConfirmDialog from './ConfirmDialog';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

interface ReservationListProps {
  reservas: any[];
  loading: boolean;
  onDelete: (id: number) => void;
}

const ReservationList: React.FC<ReservationListProps> = ({ reservas, loading, onDelete }) => {
  const [search, setSearch] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();

  // Prueba de Sentry en Lista de Reservas
  if (typeof window !== "undefined" && window.location.search.includes("sentryTest=reservas")) {
    throw new Error("Prueba de error Sentry en Lista de Reservas");
  }

  const filtered = reservas.filter(r => {
    const matchNombre = r.room?.name?.toLowerCase().includes(search.toLowerCase());
    const matchFecha = searchDate ? r.checkInDate?.slice(0,10) === searchDate : true;
    return matchNombre && matchFecha;
  });

  const handleAskDelete = (id: number) => {
    setSelectedId(id);
    setDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      onDelete(selectedId);
    }
    setDialogOpen(false);
    setSelectedId(null);
  };

  return (
    <div>
      <div className="reservation-list-search-bar">
        <input
          type="text"
          placeholder="Buscar por habitación..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="form-control"
          style={{minWidth:220}}
        />
        <input
          type="date"
          value={searchDate}
          onChange={e => setSearchDate(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="reservation-list-table-wrapper">
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Habitación</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Estado</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} className="reservation-list-loading">Cargando...</td></tr>
            ) : filtered.length === 0 ? (
              <tr><td colSpan={6} className="reservation-list-empty">No hay reservas.</td></tr>
            ) : filtered.map((res, idx) => (
              <tr key={res.id} className={idx%2===0 ? 'row-alt' : ''}>
                <td>{res.room?.name || '-'}</td>
                <td>{res.checkInDate?.slice(0,10) || '-'}</td>
                <td>{res.checkOutDate?.slice(0,10) || '-'}</td>
                <td className="reservation-status">
                  {res.status === 'COMPLETED' && (
                    <span className="badge badge-completed">Finalizada</span>
                  )}
                  {res.status === 'EXPIRED' && (
                    <span className="badge badge-expired">Caducada</span>
                  )}
                  {res.status === 'CANCELLED' && (
                    <span className="badge badge-cancelled">Cancelada</span>
                  )}
                  {res.status === 'PENDING' && (
                    <span className="badge badge-pending">Pendiente</span>
                  )}
                  {res.status === 'CONFIRMED' && (
                    <span className="badge badge-confirmed">Activa</span>
                  )}
                </td>
                <td>${res.totalPrice}</td>
                <td>
                  {(['PENDING','CONFIRMED'].includes(res.status) && new Date(res.checkOutDate) >= new Date()) && (
                    <>
                      <button
                        onClick={() => router.push(`/reservations/formulario?edit=${res.id}`)}
                        className="reservation-action-btn edit"
                        title="Editar"
                      >
                        <FaEdit size={30} />
                      </button>
                      <button
                        onClick={() => handleAskDelete(res.id)}
                        className="reservation-action-btn delete"
                        title="Eliminar"
                      >
                        <FaTrash size={30} />
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => router.push(`/reservations/confirmacion?id=${res.id}`)}
                    className="reservation-action-btn view"
                    title="Ver"
                  >
                    <FaSearch size={30} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog
        open={dialogOpen}
        title="Eliminar Reserva"
        message="¿Estás seguro? Esta acción no se puede deshacer."
        onCancel={() => setDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />
    </div>
  );
};

export default ReservationList; 
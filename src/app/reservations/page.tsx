'use client';
import "../styles/Reservations.css";
import Link from "next/link";

export default function ReservasPage() {
  const habitaciones = [
    {
      id: 1,
      nombre: "Habitación Estándar",
      descripcion: "Amplia habitación con vista al jardín, cama king size y amenities de lujo.",
      precio: 120,
      imagen: "/images/habitacion-estandar.jpg"
    },
    {
      id: 2,
      nombre: "Suite Ejecutiva",
      descripcion: "Espaciosa suite con sala de estar separada y vista al mar.",
      precio: 220,
      imagen: "/images/suite-ejecutiva.jpg"
    },
    {
      id: 3,
      nombre: "Suite Presidencial",
      descripcion: "Lujo máximo con terraza privada, jacuzzi y servicio de mayordomo.",
      precio: 350,
      imagen: "/images/suite-presidencial.jpg"
    }
  ];

  return (
    <main className="main-reservas">
      <section className="hero-reservas">
        <h1>Reserve su experiencia Meducin</h1>
        <p>Seleccione entre nuestras exclusivas opciones de alojamiento</p>
      </section>

      <section className="reservas-grid">
        {habitaciones.map((habitacion) => (
          <div key={habitacion.id} className="reserva-card">
            <img 
              src={habitacion.imagen} 
              alt={habitacion.nombre} 
              className="reserva-img"
            />
            <div className="reserva-content">
              <h2>{habitacion.nombre}</h2>
              <p className="reserva-desc">{habitacion.descripcion}</p>
              <p className="reserva-precio">Desde ${habitacion.precio}/noche</p>
              <Link href={`/reservas/formulario?tipo=${habitacion.id}`} className="btn-reserva">
                Reservar Ahora
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="reserva-beneficios">
        <h2>Beneficios exclusivos</h2>
        <div className="beneficios-grid">
          <div className="beneficio-card">
            <h3>Cancelación gratuita</h3>
            <p>Cambios o cancelaciones sin costo hasta 48 horas antes.</p>
          </div>
          <div className="beneficio-card">
            <h3>Desayuno incluido</h3>
            <p>Buffet gourmet todas las mañanas para nuestros huéspedes.</p>
          </div>
          <div className="beneficio-card">
            <h3>Upgrade gratuito</h3>
            <p>Sujeto a disponibilidad al momento del check-in.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
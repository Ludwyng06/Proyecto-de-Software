export default function PreguntasFrecuentes() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 6px 32px rgba(0,40,104,0.10)', padding: '3rem', fontSize: '1.25rem'}}>
      <h1 style={{color: '#002868', marginBottom: '2.5rem', fontSize: '2.5rem', textAlign: 'center'}}>Preguntas Frecuentes</h1>
      <div style={{display: 'flex', flexDirection: 'column', gap: '2.2rem'}}>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿Cómo puedo reservar una habitación?</h2>
          <p>Puedes reservar directamente en nuestra web, llamando al hotel o escribiéndonos por WhatsApp.</p>
        </div>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿Cuáles son los horarios de check-in y check-out?</h2>
          <p>El check-in es a partir de las 15:00 y el check-out hasta las 12:00.</p>
        </div>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿Se admiten mascotas?</h2>
          <p>Sí, admitimos mascotas pequeñas bajo petición y con un cargo adicional.</p>
        </div>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿El hotel cuenta con estacionamiento?</h2>
          <p>Sí, disponemos de estacionamiento privado y seguro para nuestros huéspedes.</p>
        </div>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿Qué servicios incluye la tarifa?</h2>
          <p>Incluye desayuno buffet, acceso a piscina, gimnasio, wifi y actividades recreativas.</p>
        </div>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿Puedo cancelar o modificar mi reserva?</h2>
          <p>Sí, puedes cancelar o modificar tu reserva sin costo hasta 48 horas antes de la llegada.</p>
        </div>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿Ofrecen traslados al aeropuerto?</h2>
          <p>Ofrecemos servicio de traslado bajo reserva previa y con costo adicional.</p>
        </div>
        <div>
          <h2 style={{color: '#004080', fontSize: '1.35rem', marginBottom: '0.5rem'}}>¿Hay habitaciones adaptadas para personas con movilidad reducida?</h2>
          <p>Sí, contamos con habitaciones accesibles y adaptadas para personas con movilidad reducida.</p>
        </div>
      </div>
    </main>
  );
} 
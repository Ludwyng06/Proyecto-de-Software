export default function PaquetesPromocionales() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 6px 32px rgba(0,40,104,0.10)', padding: '3rem', fontSize: '1.25rem'}}>
      <h1 style={{color: '#002868', marginBottom: '2rem', fontSize: '2.5rem'}}>Paquetes Promocionales</h1>
      <p style={{marginBottom: '2rem', fontSize: '1.3rem'}}>Descubre nuestras ofertas y paquetes exclusivos para tu próxima estadía. Aprovecha descuentos especiales, servicios adicionales y experiencias únicas diseñadas para ti y tu familia. ¡Reserva ahora y vive una experiencia inolvidable en Hotel Meducin!</p>
      <img src="/images/paquete-promocional.jpg" alt="Paquetes Promocionales" style={{width: '100%', maxWidth: '700px', display: 'block', margin: '2rem auto', borderRadius: '1.2rem'}} />
      <ul style={{listStyle: 'disc', paddingLeft: '2rem', color: '#222', fontSize: '1.15rem'}}>
        <li><strong>Escapada Romántica:</strong> Cena especial, spa y decoración en la habitación.</li>
        <li><strong>Vacaciones Familiares:</strong> Actividades para niños y descuentos en restaurantes.</li>
        <li><strong>Fin de Semana Wellness:</strong> Acceso ilimitado al spa y clases de yoga.</li>
        <li><strong>Paquete Ejecutivo:</strong> Servicios exclusivos para viajes de negocios.</li>
      </ul>
    </main>
  );
} 
export default function EventosEspeciales() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 6px 32px rgba(0,40,104,0.10)', padding: '3rem', fontSize: '1.25rem'}}>
      <h1 style={{color: '#002868', marginBottom: '2rem', fontSize: '2.5rem'}}>Eventos Especiales</h1>
      <p style={{marginBottom: '2rem', fontSize: '1.3rem'}}>Celebra tus momentos más importantes con nosotros. Organizamos eventos personalizados para cada ocasión.</p>
      <img src="/images/evento.jpg" alt="Eventos Especiales" style={{maxWidth: '100%', borderRadius: '1rem', margin: '2rem 0'}} />
      <ul style={{listStyle: 'disc', paddingLeft: '2rem', color: '#222', fontSize: '1.15rem'}}>
        <li>Bodas y aniversarios</li>
        <li>Reuniones empresariales</li>
        <li>Cumpleaños y celebraciones</li>
        <li>Eventos temáticos</li>
      </ul>
    </main>
  );
} 
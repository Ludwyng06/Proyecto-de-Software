export default function ActividadesAireLibre() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 6px 32px rgba(0,40,104,0.10)', padding: '3rem', fontSize: '1.25rem'}}>
      <h1 style={{color: '#002868', marginBottom: '2rem', fontSize: '2.5rem'}}>Actividades al Aire Libre</h1>
      <p style={{marginBottom: '2rem', fontSize: '1.3rem'}}>Disfruta de actividades deportivas, recreativas y de aventura en los alrededores del hotel.</p>
      <img src="/images/aire-libre.jpg" alt="Actividades al Aire Libre" style={{width: '100%', maxWidth: '700px', display: 'block', margin: '2rem auto', borderRadius: '1.2rem'}} />
      <ul style={{listStyle: 'disc', paddingLeft: '2rem', color: '#222', fontSize: '1.15rem'}}>
        <li>Senderismo y ciclismo</li>
        <li>Deportes acuáticos</li>
        <li>Yoga al aire libre</li>
        <li>Juegos y animación</li>
      </ul>
    </main>
  );
} 
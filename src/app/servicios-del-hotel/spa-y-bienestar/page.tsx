export default function SpaBienestar() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 6px 32px rgba(0,40,104,0.10)', padding: '3rem', fontSize: '1.25rem'}}>
      <h1 style={{color: '#002868', marginBottom: '2rem', fontSize: '2.5rem'}}>Spa & Bienestar</h1>
      <p style={{marginBottom: '2rem', fontSize: '1.3rem'}}>Relájate y disfruta de nuestros tratamientos exclusivos de spa, masajes y bienestar en un ambiente de lujo.</p>
      <img src="/images/spa y bienestar.jpg" alt="Spa & Bienestar" style={{width: '100%', maxWidth: '700px', display: 'block', margin: '2rem auto', borderRadius: '1.2rem'}} />
      <ul style={{listStyle: 'disc', paddingLeft: '2rem', color: '#222', fontSize: '1.15rem'}}>
        <li>Masajes relajantes y terapéuticos</li>
        <li>Tratamientos faciales y corporales</li>
        <li>Zona de aguas y sauna</li>
        <li>Programas de bienestar personalizados</li>
      </ul>
    </main>
  );
} 
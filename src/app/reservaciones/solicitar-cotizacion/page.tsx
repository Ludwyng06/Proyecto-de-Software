export default function SolicitarCotizacion() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 6px 32px rgba(0,40,104,0.10)', padding: '3rem', fontSize: '1.25rem'}}>
      <h1 style={{color: '#002868', marginBottom: '2rem', fontSize: '2.5rem'}}>Solicitar Cotización</h1>
      <p style={{marginBottom: '2rem', fontSize: '1.3rem'}}>Solicita un presupuesto personalizado para tu evento o grupo.</p>
      <form style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
        <input type="text" placeholder="Nombre" style={{padding: '0.9rem', borderRadius: '0.7rem', border: '1px solid #ccc', fontSize: '1.1rem'}} />
        <input type="email" placeholder="Correo electrónico" style={{padding: '0.9rem', borderRadius: '0.7rem', border: '1px solid #ccc', fontSize: '1.1rem'}} />
        <input type="text" placeholder="Tipo de evento" style={{padding: '0.9rem', borderRadius: '0.7rem', border: '1px solid #ccc', fontSize: '1.1rem'}} />
        <textarea placeholder="Detalles adicionales" style={{padding: '0.9rem', borderRadius: '0.7rem', border: '1px solid #ccc', minHeight: '120px', fontSize: '1.1rem'}} />
        <button style={{background: '#002868', color: '#fff', border: 'none', borderRadius: '0.7rem', padding: '0.9rem', fontWeight: 600, cursor: 'pointer', fontSize: '1.1rem'}}>Solicitar</button>
      </form>
    </main>
  );
} 
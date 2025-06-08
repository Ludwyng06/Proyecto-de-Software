export default function BuscarHabitacion() {
  return (
    <main style={{maxWidth: '900px', margin: '3rem auto', background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 6px 32px rgba(0,40,104,0.10)', padding: '3rem', fontSize: '1.25rem'}}>
      <h1 style={{color: '#002868', marginBottom: '1rem'}}>Buscar Habitación</h1>
      <p style={{marginBottom: '1.5rem'}}>Encuentra la habitación perfecta para tu estadía en Hotel Meducin.</p>
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <input type="date" placeholder="Fecha de entrada" style={{padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc'}} />
        <input type="date" placeholder="Fecha de salida" style={{padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc'}} />
        <select style={{padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc'}}>
          <option>Tipo de habitación</option>
          <option>Estándar</option>
          <option>Suite Ejecutiva</option>
          <option>Suite Presidencial</option>
        </select>
        <button style={{background: '#002868', color: '#fff', border: 'none', borderRadius: '0.5rem', padding: '0.75rem', fontWeight: 600, cursor: 'pointer'}}>Buscar</button>
      </form>
    </main>
  );
} 
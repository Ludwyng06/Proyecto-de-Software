export default function Restaurantes() {
  return (
    <main className="restaurantes-page">
      <h1>Restaurantes</h1>
      <p>Descubre la mejor gastronomía internacional y local en nuestros restaurantes de lujo.</p>
      <img src="/images/restaurante.jpg" alt="Restaurante" style={{maxWidth: '100%', borderRadius: '1rem', margin: '2rem 0'}} />
      <ul>
        <li>Buffet internacional</li>
        <li>Restaurante gourmet</li>
        <li>Bar y lounge</li>
        <li>Opciones vegetarianas y veganas</li>
      </ul>
    </main>
  );
} 
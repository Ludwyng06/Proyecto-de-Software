import "../styles/pages.css";

export default function ServicesPage() {
    return (
      <section className="page">
        <h1>Servicios</h1>
        <p>
          En Hotel Meducin, nos esforzamos por ofrecer servicios integrales para que tu estancia sea perfecta.
        </p>
  
        <div className="service-list">
          <h2>Spa & Wellness</h2>
          <p>Masajes relajantes, tratamientos faciales, jacuzzi y más.</p>
          <p><em>(Imagen sugerida: sala de masajes, sauna o jacuzzi)</em></p>
  
          <h2>Restaurante "Sabor Meducin"</h2>
          <p>Menú internacional con ingredientes frescos y opción de menú vegetariano/vegano.</p>
          <p><em>(Imagen sugerida: plato gourmet o comedor con vista)</em></p>
  
          <h2>Piscina y Terraza</h2>
          <p>Perfectas para relajarte, leer o disfrutar del atardecer.</p>
  
          <h2>Gimnasio</h2>
          <p>Equipado con máquinas de cardio, pesas y zona de yoga.</p>
  
          <h2>Centro de Negocios</h2>
          <p>Computadoras, impresora, Wi-Fi y espacio coworking 24/7.</p>
  
          <h2>Salones para Eventos</h2>
          <p>Reuniones corporativas, bodas y eventos sociales.</p>
        </div>
      </section>
    );
  }
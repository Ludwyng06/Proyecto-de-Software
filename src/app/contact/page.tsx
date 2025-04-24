import "../styles/pages.css";

export default function ContactPage() {
    return (
      <section className="page">
        <h1>Contáctanos</h1>
        <p>
          ¿Tienes preguntas? ¿Deseas hacer una reserva o cotizar un evento? Estamos a tu disposición.
        </p>
  
        <div className="contact-info">
          <p><strong>Dirección:</strong> Av. Principal #123, Ciudad</p>
          <p><strong>Teléfono:</strong> +123 456 789</p>
          <p><strong>Email:</strong> contacto@meducin.com</p>
        </div>
  
        <h2>Formulario de Contacto</h2>
        <form className="contact-form">
          <label>Nombre:</label>
          <input type="text" name="name" required />
  
          <label>Correo electrónico:</label>
          <input type="email" name="email" required />
  
          <label>Mensaje:</label>
          <textarea name="message" rows={5} required></textarea>
  
          <button type="submit">Enviar Mensaje</button>
        </form>
  
        <p><em>(Imagen sugerida: mapa del hotel o fachada con información visual de contacto)</em></p>
      </section>
    );
  }
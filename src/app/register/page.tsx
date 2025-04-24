import "../styles/Register.css";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="register-container">
      {/* Botón para cerrar y volver al inicio */}
      <Link href="/" className="close-button">✖</Link>

      <div className="register-card">
        <h1 className="register-title">Crear Cuenta</h1>
        <p className="register-subtitle">
          Únete a Hotel Meducin y vive la experiencia.
        </p>

        <form className="register-form">
          <input
            type="text"
            placeholder="Nombre completo"
            className="register-input"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="register-input"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="register-input"
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="register-input"
            required
          />
          <label className="register-checkbox">
            <input type="checkbox" required />
            Acepto los <Link href="/terms">Términos y Condiciones</Link>
          </label>
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>

        <p className="register-footer">
          ¿Ya tienes cuenta? <Link href="/login">Inicia Sesión</Link>
        </p>
      </div>
    </div>
  );
}

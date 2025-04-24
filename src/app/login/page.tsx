import Link from "next/link";
import "../styles/Login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      {/* Botón para cerrar y volver al inicio */}
      <Link href="/" className="close-button">✖</Link>

      <div className="login-card">
        <h1 className="login-title">Iniciar Sesión</h1>
        <p className="login-subtitle">Bienvenido a Hotel Meducin</p>

        <form className="login-form">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="login-footer">
          ¿No tiene una cuenta? <Link href="/register">Regístrese</Link>
        </p>
      </div>
    </div>
  );
}

import "../styles/Header.css";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Hotel Meducin Logo" />
          <h1>Hotel Meducin</h1>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#about">Nosotros</a>
            </li>
            <li>
              <a href="#rooms">Habitaciones</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>

        <a href="#book" className="btn-reserve">
          Reservar Ahora
        </a>
      </div>
    </header>
  );
};

export default Header;

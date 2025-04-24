"use client";
import React, { useState } from "react";
import "../styles/Navbar.css";

const menuItems = [
  {
    title: "Servicios del Hotel",
    submenu: ["Spa & Bienestar", "Restaurantes", "Piscina y Gimnasio"],
  },
  {
    title: "Experiencias",
    submenu: ["Tours Locales", "Eventos Especiales", "Actividades al Aire Libre"],
  },
  {
    title: "Reservaciones",
    submenu: ["Buscar habitación", "Paquetes promocionales", "Solicitar cotización"],
  },
  {
    title: "Contacto y Ayuda",
    submenu: ["Contáctanos", "Preguntas Frecuentes", "Soporte al Cliente"],
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-menu">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="nav-link-wrapper"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div
                className={`nav-link ${
                  activeMenu === item.title ? "active" : ""
                }`}
              >
                {item.title} <span className="dropdown-icon">▾</span>
              </div>
              {activeMenu === item.title && (
                <div className="dropdown-menu">
                  {item.submenu.map((subitem) => (
                    <div className="dropdown-item" key={subitem}>
                      {subitem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

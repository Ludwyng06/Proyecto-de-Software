"use client";
import React, { useState } from "react";
import "../styles/Navbar.css";

const menuItems = [
  {
    title: "Hoteles y resorts",
    submenu: ["Hilton Garden Inn", "Waldorf Astoria", "DoubleTree"],
  },
  {
    title: "Hilton Honors",
    submenu: ["Unirse", "Ver puntos", "Beneficios"],
  },
  {
    title: "Reuniones y eventos",
    submenu: ["Reservar evento", "Espacios", "Solicitar cotización"],
  },
  {
    title: "Hilton for Business",
    submenu: ["Soluciones", "Afiliaciones", "Contacto"],
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

"use client";
import "../styles/Header.css";
import React, { useState } from "react";

const Header = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const toggleLanguageMenu = () => setShowLanguageMenu(!showLanguageMenu);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <strong>Hotel Meducin</strong>
          <span className="tagline">Because your comfort is our commitment.</span>
        </div>
        <nav className="nav">
          <div
            className="language-selector"
            onClick={toggleLanguageMenu}
            onBlur={() => setTimeout(() => setShowLanguageMenu(false), 100)}
            tabIndex={0}
          >
            <span className="language-label">Idioma</span>
            <span className="lang">Español ▾</span>
            {showLanguageMenu && (
              <div className="language-dropdown">
                <div className="language-option">Español</div>
                <div className="language-option">English</div>
              </div>
            )}
          </div>
          <a href="#">Encontrar estadía <span className="calendar-icon">📅</span></a>
          <a href="#">Inscríbase</a>
          <a href="#" className="login-link">Inicie sesión 👤</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

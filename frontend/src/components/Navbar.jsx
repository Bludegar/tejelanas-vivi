import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Tejelanas Vivi</div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about">¿Quiénes somos?</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#faq">Preguntas Frecuentes</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Hotel Paradise</h1>
      <div className="navbar-links">
        <Link href="/">Inicio</Link>
        <Link href="/rooms">Habitaciones</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;

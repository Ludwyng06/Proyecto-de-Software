import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import RoomCard from "./components/RoomCard";
import { rooms } from "./utils/data";
import "./styles/globals.css"; // Asegúrate de importar estilos si usas CSS puro.

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="rooms-section">
        <h2 className="title">Nuestras Habitaciones</h2>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              title={room.title}
              price={room.price}
              image={room.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

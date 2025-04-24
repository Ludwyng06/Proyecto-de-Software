import Navbar from "./components/Navbar";
import Hero from "./components/Main";
import Footer from "./components/Footer";
import RoomCard from "./components/RoomCard";
import { rooms } from "./utils/data";
import "./styles/globals.css"; // Asegúrate de importar estilos si usas CSS puro.
import Header from "./components/Header";
import { Main } from "next/document";
import MainComponent from "./components/Main";

export default function Home() {
  return (
    <main className="grid-container">
      <Navbar />
      <MainComponent />
    </main>
  );
}

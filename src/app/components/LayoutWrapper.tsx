// src/app/components/LayoutWrapper.tsx
"use client";
import "../styles/LayoutWrapper.css"; // Asegúrate de importar los estilos necesarios

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hide = pathname === "/login" || pathname === "/register";

  return (
    <div className="layout-wrapper">
      {!hide && <Header />}
      {!hide && <Navbar />}
      <div className="main-content">{children}</div>
      {!hide && <Footer />}
    </div>
  );
}

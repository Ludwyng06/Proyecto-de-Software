// src/app/components/LayoutWrapper.tsx
"use client";
import "../styles/LayoutWrapper.css"; // Asegúrate de importar los estilos necesarios

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hide = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!hide && <Header />}
      {children}
      {!hide && <Footer />}
    </>
  );
}

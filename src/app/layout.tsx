// src/app/layout.tsx
'use client';
import "./styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
import { AuthProvider } from "./context/AuthContext";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import "../../sentry.client.config";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReactQueryProvider>
          <AuthProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

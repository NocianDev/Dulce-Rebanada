/*
App.tsx - Página principal para "Dulce rebanada" (Postrería artesanal)

IMPORTANTE SOBRE EL ERROR QUE TUVISTE:
- El error `Unexpected token (12:64)` suele ocurrir cuando el archivo contiene JSX pero el proyecto lo está tratando como TypeScript/TSX o viceversa.
- Si tu proyecto no usa TypeScript, guarda este archivo como `src/App.jsx` (extensión .jsx). Si estás usando TypeScript, guarda como `src/App.tsx`.
- Abajo encontrarás una versión **TypeScript (TSX)** del componente que compila correctamente en proyectos Vite + React + TypeScript.
  Si prefieres JavaScript, simplemente cambia la extensión a `.jsx` y elimina los tipos (o dímelo y lo convierto por ti).

Instrucciones rápidas (resumen):
1) Si usas JavaScript: guarda como `src/App.jsx`.
2) Si usas TypeScript: guarda como `src/App.tsx` y asegúrate de tener `typescript` instalado y `vite` configurado para TSX.

Copiar/pegar abajo según tu stack.
*/

import { type JSX } from "react";

// ----------------- CONFIG & TIPOS (TypeScript friendly) -----------------
type MenuItem = {
  id: number;
  name: string;
  price: string;
  desc: string;
  img: string;
};

// Cambia la ruta del logo por la tuya; si usas JavaScript, no hace falta cambiar nada aquí
const LOGO_SRC = "/assets/logo-placeholder.png"; // Reemplaza con '/assets/mi-logo.png' o importa tu logo
const SHOP_NAME = "Dulce rebanada";
const TAGLINE = "Postrería artesanal - sabor que enamora";

const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Tarta de fresa", price: "$65", desc: "Base de mantequilla, crema y fresas naturales", img: "./public/images/Image 1.jpg"},
  { id: 2, name: "Brownie doble", price: "$45", desc: "Chocolate intenso con trozos de nuez", img: "./public/images/Image 2.jpg" },
  { id: 3, name: "Cheesecake de limón", price: "$75", desc: "Cremoso con un toque cítrico", img: "./public/images/Image 3.jpg" },
  { id: 4, name: "Éclair de chocolate", price: "$40", desc: "Relleno de crema y cobertura de chocolate", img: "./public/images/Image 4.webp" },
];

// Dirección para el iframe de Google Maps — cámbiala por la real
const MAP_QUERY = encodeURIComponent("Dulce rebanada, Monterrey, México");

// ----------------- COMPONENTE PRINCIPAL -----------------
export default function App(): JSX.Element {
  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-rose-50 via-rose-100 to-white text-gray-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg overflow-hidden bg-white/80 shadow-lg flex items-center justify-center">
            {/* Logo placeholder: reemplaza LOGO_SRC por la ruta de tu imagen */}
            <img src={LOGO_SRC} alt={`${SHOP_NAME} logo`} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{SHOP_NAME}</h1>
            <p className="text-sm text-rose-600/90">{TAGLINE}</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#menu" className="hover:underline">Menú</a>
          <a href="#ubicacion" className="hover:underline">Ubicación</a>
          <a href="#conocenos" className="hover:underline">Conócenos</a>
          <a href="#redes" className="bg-rose-600 text-white px-3 py-2 rounded-full shadow-sm hover:opacity-95">Ordena ahora</a>
        </nav>
        <div className="md:hidden">{/* Mobile nav button placeholder (sin JS) */}
          <button className="px-3 py-2 bg-white/90 rounded-md shadow">Menu</button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="py-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Sabores artesanales que cuentan historias</h2>
          <p className="mt-4 text-lg text-gray-600">En {SHOP_NAME} horneamos con pasión y con ingredientes seleccionados. Tartas, postres individuales y repostería para pedidos especiales.</p>
          <div className="mt-6 flex gap-4">
            <a href="#menu" className="inline-flex items-center gap-2 bg-rose-600 text-white px-5 py-3 rounded-2xl shadow-lg">Ver menú</a>
            <a href="#ubicacion" className="inline-flex items-center gap-2 border border-rose-200 px-5 py-3 rounded-2xl">Cómo llegar</a>
          </div>

          <div className="mt-8 flex items-center gap-4" aria-hidden>
            <div className="p-3 bg-white rounded-2xl shadow">⭐ 4.9</div>
            <div className="text-sm text-gray-500">Opiniones de clientes — "Increíble sabor y presentación"</div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform -translate-y-4">
            {/* Imagen hero - reemplaza por una foto atractiva */}
            <img src="./public/images/Image 6.webp" alt="Pastel artesanal" className="w-full h-80 object-cover" />
          </div>

          <div className="">
           
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Nuestro menú</h3>
          <p className="text-sm text-gray-500">Elaborado con ingredientes frescos y recetas artesanales</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="h-40 w-full overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <div className="text-rose-600 font-bold">{item.price}</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="text-sm px-3 py-2 rounded-full border">Ver</button>
                  <button className="text-sm px-3 py-2 rounded-full bg-rose-600 text-white">Pedir</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Conócenos */}
      <section id="conocenos" className="max-w-6xl mx-auto px-6 py-12 bg-gradient-to-r from-white via-rose-50 to-white rounded-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Conócenos</h3>
            <p className="mt-4 text-gray-600">Somos un equipo familiar apasionado por la repostería artesanal. Cada receta se perfecciona con cuidado y un toque personal para que cada bocado sea especial.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>🏅 Ingredientes seleccionados</li>
              <li>🚚 Envíos y pedidos para eventos</li>
              <li>🎂 Personalización de pasteles</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow">
            <img src="/assets/equipo.jpg" alt="Equipo de reposteria" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Ubicación</h3>
        <p className="text-sm text-gray-500 mt-2">Ven a visitarnos o solicita tu pedido para recoger.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow">
            {/* Google Maps embed - reemplaza MAP_QUERY por la dirección exacta de tu local */}
            <iframe
              title="Mapa de ubicación"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="w-full h-96 border-0"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div>
              <h4 className="font-semibold">Dirección</h4>
              <p className="text-sm text-gray-600">Av. Ejemplo 123, Col. Centro, Monterrey, N.L.</p>
            </div>

            <div>
              <h4 className="font-semibold">Horario</h4>
              <p className="text-sm text-gray-600">Lun - Vie: 9:00 - 19:00 • Sáb: 9:00 - 15:00 • Dom: Cerrado</p>
            </div>

            <div>
              <h4 className="font-semibold">Contacto</h4>
              <p className="text-sm text-gray-600">Tel: 81 1234 5678 • <a href="mailto:contacto@dulcerebanada.com" className="text-rose-600">contacto@dulcerebanada.com</a></p>
            </div>

            <div>
              <a href="https://wa.me/528112345678?text=Hola%20Dulce%20rebanada,%20quiero%20hacer%20un%20pedido" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-green-50">📲 Pedir por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Redes sociales */}
      <section id="redes" className="max-w-6xl mx-auto px-6 py-12 bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Síguenos</h3>
          <p className="text-sm text-gray-500">Publicamos novedades, ofertas y fotos deliciosas</p>
        </div>

        <div className="mt-6 flex gap-4 items-center">
          {/* Social icons: reemplaza hrefs por tus perfiles */}
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88v-6.99H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/></svg>
            <span className="text-sm">Facebook</span>
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="#C13584" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-sm">Instagram</span>
          </a>

          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18a3 3 0 003-3V6h3a3 3 0 003 3v6a6 6 0 11-6-6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-sm">TikTok</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} {SHOP_NAME}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#conocenos">Acerca</a>
            <a href="#menu">Menú</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


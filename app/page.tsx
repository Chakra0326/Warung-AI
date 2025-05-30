"use client";

import React, { useState } from "react";
import { Home, User, ShoppingCart, Menu, MessageSquare, QrCode } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const [cartCount, setCartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      {/* Header */}
      <header className="bg-white text-gray-900 py-3 px-4 shadow-md flex items-center justify-between sticky top-0 z-50 border-b-0">
        <div className="flex items-center space-x-2">
          <img src="logoRumahWarungAI.png" alt="WarungAI Logo" className="h-12 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#fitur" className="hover:underline">Fitur</a>
          <a href="#kategori" className="hover:underline">Kategori</a>
          <a href="#premium" className="hover:underline">Premium</a>
          <a href="#kontak" className="hover:underline">Kontak</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.div
        {...({
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center py-20 px-4 bg-white",
          id: "hero"
        } as HTMLMotionProps<"div">)}
      >
        <img
          src="logoRumahWarungAI.png"
          alt="Logo WarungAI"
          className="mx-auto h-24 mb-4 animate-bounce"
        />
        <h1 className="text-5xl font-bold mb-4">WarungAI</h1>
        <p className="text-lg text-gray-600 mb-6">Warung Pintar dengan Sentuhan AI</p>
        <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded hover:bg-yellow-500">
          Mulai Gratis
        </button>
      </motion.div>

      {/* Footer */}
      <footer className="bg-white text-center text-gray-700 p-4" id="kontak">
        <p>Email: support@warungai.online</p>
        <p>Alamat: Jl. Desa Digital No. 123, Indonesia</p>
        <p className="mt-2">© 2025 WarungAI by Chakra</p>
      </footer>

      <BottomNav cartCount={cartCount} onMenuClick={() => setMenuOpen(true)} />

      {/* Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow max-w-sm w-full">
            <h4 className="text-lg font-bold mb-4">Menu Tambahan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero">Beranda</a></li>
              <li><a href="#kategori">Kategori</a></li>
              <li><a href="#fitur">Fitur</a></li>
              <li><a href="#kontak">Kontak</a></li>
              <li><button onClick={() => setMenuOpen(false)} className="text-red-500 mt-2">Tutup</button></li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}


function BottomNav({ cartCount, onMenuClick }: { cartCount: number; onMenuClick: () => void }) {
  const icons = [
    { href: "hero", src: "icon_1.ico", label: "Beranda" },
    { href: "kategori", src: "icon_2.ico", label: "Kategori" },
    { href: "scan", src: "icon_3.ico", label: "Scan" },
    { href: "chat", src: "icon_4.ico", label: "Chat" },
    { href: "akun", src: "icon_5.ico", label: "Akun" },
  ];

  return (
   <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t z-50 flex justify-around py-2">
  {icons.map((icon) => (
    <a key={icon.href} href={`#${icon.href}`} className="flex flex-col items-center text-xs text-gray-700">
      <img src={`${icon.src}`} alt={icon.label} className="w-8 h-8 mb-1" />
      <span>{icon.label}</span>
    </a>
  ))}
</nav>

  );
}

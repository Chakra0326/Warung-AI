"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  ShoppingCart,
  QrCode,
  MessageSquare,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      {/* Header */}
      <header className="bg-white text-gray-900 py-3 px-4 shadow-md flex items-center justify-between sticky top-0 z-50 border-b-0">
        <div className="flex items-center space-x-2">
          <img
            src="logoRumahWarungAI.png"
            alt="WarungAI Logo"
            className="h-12 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#fitur" className="hover:underline">
            Fitur
          </a>
          <a href="#kategori" className="hover:underline">
            Kategori
          </a>
          <a href="#premium" className="hover:underline">
            Premium
          </a>
          <a href="#kontak" className="hover:underline">
            Kontak
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4 bg-white"
        id="hero"
      >
        <img
          src="logoRumahWarungAI.png"
          alt="Logo WarungAI"
          className="mx-auto h-24 mb-4 animate-bounce"
        />
        <h1 className="text-5xl font-bold mb-4">WarungAI</h1>
        <p className="text-lg text-gray-600 mb-6">
          Warung Pintar dengan Sentuhan AI
        </p>
        <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded hover:bg-yellow-500">
          Mulai Gratis
        </button>
      </motion.div>

      {/* Footer */}
      <footer className="bg-white text-center text-gray-700 p-4" id="kontak">
        <p>Email: support@warungai.id</p>
        <p>Alamat: Jl. Desa Digital No. 123, Indonesia</p>
        <p className="mt-2">© 2025 WarungAI by Deskly</p>
      </footer>

      {/* BottomNav langsung disini */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50 flex justify-around py-2">
        <Link
          href="/#beranda"
          className="flex flex-col items-center text-xs text-gray-700"
        >
          <Home size={22} className="mb-1" />
          <span>Beranda</span>
        </Link>

        <Link
          href="/#kategori"
          className="flex flex-col items-center text-xs text-gray-700"
        >
          <ShoppingCart size={22} className="mb-1" />
          <span>Kategori</span>
        </Link>

        <Link
          href="/#scan"
          className="flex flex-col items-center text-xs text-gray-700"
        >
          <QrCode size={22} className="mb-1" />
          <span>Scan</span>
        </Link>

        <Link
          href="/#chat"
          className="flex flex-col items-center text-xs text-gray-700"
        >
          <MessageSquare size={22} className="mb-1" />
          <span>Chat</span>
        </Link>

        <Link
          href="/#akun"
          className="flex flex-col items-center text-xs text-gray-700 relative"
        >
          <User size={22} className="mb-1" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
          <span>Akun</span>
        </Link>
      </nav>
    </main>
  );
}

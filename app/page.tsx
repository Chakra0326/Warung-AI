"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Soup, CupSoda, Store, Bot, ClipboardList, BarChart3, Star } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-500 text-white py-3 px-4 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/Logo3.png" alt="WarungAI Logo" className="h-12 w-auto" />
          <span className="text-lg font-bold">WarungAI</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#fitur" className="hover:underline">Fitur</a>
          <a href="#kategori" className="hover:underline">Kategori</a>
          <a href="#demo" className="hover:underline">Demo</a>
          <a href="#kontak" className="hover:underline">Kontak</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-blue-100" id="hero">
        <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-4">
          Digitalisasi Warung Anda Sekarang
        </motion.h2>
        <p className="text-lg mb-6">Mudah. Cepat. Gratis.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">Coba Sekarang</button>
      </section>

      {/* Fitur */}
      <section className="py-16 px-4 bg-gray-100" id="fitur">
        <h3 className="text-2xl font-semibold text-center mb-10">Fitur WarungAI</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "Website Mini Gratis",
            "Manajemen Stok",
            "Transaksi & Riwayat",
            "Rekomendasi Barang Laris (AI)",
            "Terhubung ke WhatsApp",
            "Dashboard Laporan Keuangan",
          ].map((title) => (
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-lg shadow-md text-center" key={title}>
              <h4 className="font-semibold text-lg">{title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Kategori */}
      <section className="py-16 px-4" id="kategori">
        <h3 className="text-2xl font-semibold text-center mb-10">Kategori Warung</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Masakan Padang", icon: <Soup /> },
            { name: "Warung Tegal", icon: <Soup /> },
            { name: "Nasi Sunda", icon: <Soup /> },
            { name: "Minuman & Jus", icon: <CupSoda /> },
            { name: "Warung Sembako", icon: <ShoppingBag /> },
            { name: "Kios Campuran", icon: <Store /> },
            { name: "ChatbotAI", icon: <Bot /> },
            { name: "Keuangan & Laporan", icon: <BarChart3 /> },
          ].map(({ name, icon }) => (
            <div className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center gap-2" key={name}>
              <div className="text-blue-500">{icon}</div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Produk */}
      <section className="bg-blue-50 py-16 px-4" id="demo">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Demo Produk</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Minyak Goreng", "Beras 5kg", "Sabun Cuci"].map((name) => (
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-lg shadow-md" key={name}>
                <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center">📦</div>
                <h4 className="font-bold text-lg mb-1">{name}</h4>
                <p className="text-blue-500">Rp15.000</p>
                <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Beli</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10" id="kontak">
        <p>Email: support@deskly.tech</p>
        <p>Alamat: Jl. Desa Digital No. 123, Indonesia</p>
        <p className="mt-2">© 2025 WarungAI by Deskly</p>
      </footer>
    </main>
  );
}

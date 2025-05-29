// File: app/page.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, LayoutDashboard, Store, ChefHat, Coins } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-500 text-white shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <img
              src="/Logo3.png"
              alt="WarungAI Logo"
              className="h-12 sm:h-16 w-auto"
            />
            <span className="text-xl sm:text-2xl font-bold">WarungAI</span>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm sm:text-base">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#kategori" className="hover:underline">Kategori</a>
            <a href="#premium" className="hover:underline">Premium</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        className="text-center py-20 px-4 bg-blue-100"
        id="hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Digitalisasi Warung Anda Sekarang</h2>
        <p className="text-lg mb-6">Mudah. Cepat. Gratis. Atau Berlangganan untuk fitur Pro!</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Mulai Gratis</button>
          <button className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded hover:bg-blue-100">Upgrade ke Premium</button>
        </div>
      </motion.section>

      {/* Fitur */}
      <section className="bg-gray-100 py-16 px-4" id="fitur">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10">Fitur Unggulan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Feature title="Website Mini Gratis" />
            <Feature title="Input Stok & Transaksi" />
            <Feature title="Rekomendasi AI Barang Laris" />
            <Feature title="Terhubung ke WhatsApp" />
            <Feature title="Dashboard Penjualan" />
            <Feature title="Laporan Keuangan" />
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="py-16 px-4" id="kategori">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10">Kategori Warung</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            <Kategori icon={<ChefHat />} label="Warung Padang" />
            <Kategori icon={<ChefHat />} label="Warung Tegal" />
            <Kategori icon={<Store />} label="Warung Pasar" />
            <Kategori icon={<Store />} label="Warung Nasi Sunda" />
            <Kategori icon={<LayoutDashboard />} label="Kios / Grosir" />
            <Kategori icon={<Coins />} label="Sembako" />
            <Kategori icon={<ShoppingCart />} label="Retail Kecil" />
            <Kategori icon={<Store />} label="UMKM Lainnya" />
          </div>
        </div>
      </section>

      {/* Premium */}
      <section className="bg-white py-16 px-4" id="premium">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Paket Gratis vs Premium</h3>
          <div className="overflow-auto">
            <table className="w-full table-auto border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-left">Fitur</th>
                  <th className="p-2 text-center">Gratis</th>
                  <th className="p-2 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <Row label="Jumlah Produk" free="10" premium="Unlimited" />
                <Row label="Manajemen Stok" free="❌" premium="✅" />
                <Row label="Laporan Keuangan" free="❌" premium="✅" />
                <Row label="Dashboard" free="❌" premium="✅" />
                <Row label="Akses WhatsApp" free="✅" premium="✅" />
                <Row label="Custom Domain" free="❌" premium="✅" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10" id="kontak">
        <p>Email: support@deskly.tech</p>
        <p>Alamat: Jl. Desa Digital No. 123, Indonesia</p>
        <p className="mt-2">© 2025 WarungAI by Deskly</p>
      </footer>
    </main>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <motion.div className="bg-white p-6 rounded shadow text-center" whileHover={{ scale: 1.05 }}>
      <h4 className="font-semibold text-lg">{title}</h4>
    </motion.div>
  );
}

function Kategori({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-white rounded shadow">
      <div className="text-blue-500 text-3xl">{icon}</div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}

function Row({ label, free, premium }: { label: string; free: string; premium: string }) {
  return (
    <tr className="border-t">
      <td className="p-2">{label}</td>
      <td className="p-2 text-center">{free}</td>
      <td className="p-2 text-center">{premium}</td>
    </tr>
  );
}

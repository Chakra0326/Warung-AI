import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Logo3.png"
              alt="WarungAI Logo"
              className="h-14 sm:h-16 w-auto"
            />
          </div>
          {/* Menu Navigasi */}
          <nav className="hidden sm:flex space-x-6 text-sm">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#kategori" className="hover:underline">Kategori</a>
            <a href="#dashboard" className="hover:underline">Dashboard</a>
            <a href="#harga" className="hover:underline">Harga</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 px-4 bg-blue-100"
        id="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">Digitalisasi Warung Anda Sekarang</h2>
        <p className="text-lg mb-6">Mudah. Cepat. Gratis.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Coba Sekarang
        </button>
      </motion.section>

      {/* Kategori */}
      <section className="py-16 px-4 bg-gray-100" id="kategori">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Kategori Unggulan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Feature title="ChatbotAI" />
            <Feature title="Manajemen Stok" />
            <Feature title="Laporan Keuangan" />
            <Feature title="Mini Website" />
          </div>
        </div>
      </section>

      {/* Perbandingan Free vs Premium */}
      <section className="py-16 px-4" id="harga">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Pilih Paket Anda</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Gratis</h4>
              <ul className="list-disc list-inside">
                <li>Website Mini</li>
                <li>3 Produk Aktif</li>
                <li>Terhubung WhatsApp</li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Mulai Gratis</button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Premium</h4>
              <ul className="list-disc list-inside">
                <li>Produk Unlimited</li>
                <li>Manajemen Stok</li>
                <li>Laporan Laba Rugi</li>
                <li>Dashboard Premium</li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Upgrade</button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-4" id="dashboard">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Preview Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/dashboard1.png" alt="Dashboard 1" className="rounded shadow-md" />
            <img src="/dashboard2.png" alt="Dashboard 2" className="rounded shadow-md" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10" id="kontak">
        <p>Email: support@deskly.tech</p>
        <p>Alamat: Jl. Desa Digital No. 123, Indonesia</p>
        <p className="mt-2">© 2025 WarungAI</p>
      </footer>
    </main>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="font-semibold text-lg">{title}</h4>
    </motion.div>
  );
}

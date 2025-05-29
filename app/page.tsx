// app/page.tsx

import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-500 text-white py-2 px-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <img
            src="/Logo3.png"
            alt="WarungAI Logo"
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
          {/* Menu Navigasi */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm mt-2 sm:mt-0">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#kategori" className="hover:underline">Kategori</a>
            <a href="#paket" className="hover:underline">Paket</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-blue-100" id="hero">
        <h2 className="text-4xl font-bold mb-4">Digitalisasi Warung Anda Sekarang</h2>
        <p className="text-lg mb-6">Mudah. Cepat. Gratis. Atau Berlangganan untuk fitur Pro!</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Coba Sekarang
        </button>
      </section>

      {/* Tentang */}
      <section className="py-16 px-4" id="tentang">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Tentang WarungAI</h3>
          <p>
            WarungAI adalah solusi digital yang membantu warung tradisional mengelola penjualan,
            stok, transaksi, hingga pemasaran online hanya lewat satu platform.
          </p>
        </div>
      </section>

      {/* Kategori Fitur */}
      <section className="bg-gray-50 py-16 px-4" id="kategori">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10">Kategori Layanan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Website Mini', 'Chatbot AI', 'Input Stok', 'Transaksi Harian', 'Rekomendasi AI', 'Terhubung WhatsApp', 'Dashboard Warung', 'Laporan Laba Rugi'].map((item, idx) => (
              <Feature key={idx} title={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Paket Harga */}
      <section className="py-16 px-4 bg-blue-50" id="paket">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Pilih Paket Anda</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold mb-2">Gratis</h4>
              <ul className="text-left list-disc ml-6 mb-4">
                <li>1 Website Mini</li>
                <li>5 Produk</li>
                <li>Notifikasi via WhatsApp</li>
              </ul>
              <p className="text-2xl font-bold">Rp 0</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold mb-2">Premium</h4>
              <ul className="text-left list-disc ml-6 mb-4">
                <li>Produk Unlimited</li>
                <li>Manajemen Stok</li>
                <li>Laporan Penjualan & Laba Rugi</li>
                <li>Support & Dashboard Lengkap</li>
              </ul>
              <p className="text-2xl font-bold">Rp 49.000 / bulan</p>
            </div>
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
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h4 className="font-semibold text-lg">{title}</h4>
    </div>
  );
}

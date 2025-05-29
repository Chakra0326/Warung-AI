// page.tsx 
import React from 'react';

export default function HomePage() { return ( <main className="min-h-screen bg-white text-gray-800 font-sans"> {/* Header */} <header className="bg-blue-500 text-white p-4 shadow-md flex items-center justify-between"> <div className="container mx-auto flex items-center justify-between"> <img
src="/Logo3.png"
alt="WarungAI Logo"
className="h-12 md:h-16 w-auto"
/> <nav className="space-x-4 text-sm md:text-base"> <a href="#fitur" className="hover:underline">Fitur</a> <a href="#cara" className="hover:underline">Cara Kerja</a> <a href="#kategori" className="hover:underline">Kategori</a> <a href="#kontak" className="hover:underline">Kontak</a> </nav> </div> </header>

{/* Hero Section */}
  <section className="text-center py-20 px-4 bg-blue-100" id="hero">
    <h2 className="text-4xl font-bold mb-4">Digitalisasi Warung Anda Sekarang</h2>
    <p className="text-lg mb-6">Mudah. Cepat. Gratis.</p>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
      Coba Sekarang
    </button>
  </section>

  {/* Kategori Fitur */}
  <section className="py-16 px-4 bg-white" id="kategori">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-10">Kategori Fitur WarungAI</h3>

      <div className="mb-12">
        <h4 className="text-xl font-bold mb-4 text-green-600">Fitur Gratis</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Website Mini Gratis</li>
          <li>Input Produk Terbatas</li>
          <li>Scan QR ke Toko Online</li>
          <li>Terhubung ke WhatsApp</li>
          <li>Katalog Digital</li>
          <li>Favoritkan Produk</li>
        </ul>
      </div>

      <div className="mb-12">
        <h4 className="text-xl font-bold mb-4 text-yellow-600">Fitur Premium (Berlangganan)</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Input Produk Unlimited</li>
          <li>Manajemen Stok Otomatis</li>
          <li>Laporan Laba Rugi</li>
          <li>Dashboard Penjualan</li>
          <li>Statistik Pelanggan</li>
          <li>Kirim Promo Otomatis ke WA</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-4 text-blue-600">Fitur Tambahan</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>ChatbotAI Asisten Warung</li>
          <li>Forum & Komunitas Warung</li>
          <li>Artikel Bisnis UMKM</li>
          <li>Bantuan 24/7</li>
        </ul>
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

); }

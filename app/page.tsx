import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-500 text-white py-2 px-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Logo3.png"
              alt="WarungAI Logo"
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </div>

          {/* Menu Navigasi */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm mt-4 sm:mt-0">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#cara" className="hover:underline">Cara Kerja</a>
            <a href="#demo" className="hover:underline">Demo</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
            <a href="#kategori" className="hover:underline">Kategori</a>
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

      {/* Tentang */}
      <section className="py-16 px-4" id="tentang">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Tentang WarungAI</h3>
          <p>
            WarungAI adalah solusi digital untuk warung tradisional agar bisa Go Digital dan lebih kompetitif menghadapi era modern.
          </p>
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="bg-gray-100 py-16 px-4" id="fitur">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10">Fitur Unggulan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Feature title="Website Mini Gratis" />
            <Feature title="Input Stok & Transaksi" />
            <Feature title="Rekomendasi Barang Laris (AI)" />
            <Feature title="Terhubung ke WhatsApp" />
            <Feature title="Manajemen Stok (Premium)" />
            <Feature title="Laporan Keuangan (Premium)" />
            <Feature title="Dashboard Statistik" />
            <Feature title="Chatbot AI Penjawab Pelanggan" />
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="py-16 px-4" id="kategori">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Kategori Produk & Layanan</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <li>✅ ChatbotAI</li>
            <li>✅ Mini Website</li>
            <li>✅ Input Produk</li>
            <li>✅ Transaksi</li>
            <li>✅ Laporan</li>
            <li>✅ Dashboard</li>
            <li>✅ Dukungan WhatsApp</li>
            <li>✅ Katalog Online</li>
          </ul>
        </div>
      </section>

      {/* Perbandingan Gratis vs Premium */}
      <section className="bg-white py-16 px-4" id="paket">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-10">Pilih Paket Anda</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 shadow">
              <h4 className="text-xl font-bold mb-4">Gratis</h4>
              <ul className="list-disc list-inside">
                <li>Website Mini</li>
                <li>Input Produk Maks. 20</li>
                <li>Terhubung WhatsApp</li>
              </ul>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Mulai Gratis</button>
            </div>
            <div className="border rounded-lg p-6 shadow">
              <h4 className="text-xl font-bold mb-4">Premium</h4>
              <ul className="list-disc list-inside">
                <li>Produk Unlimited</li>
                <li>Manajemen Stok</li>
                <li>Laporan Keuangan</li>
                <li>Dashboard Lanjutan</li>
              </ul>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Upgrade Premium</button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="bg-blue-50 py-16 px-4" id="demo">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Demo Warung: Bu Tini</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Product name="Minyak Goreng" price="Rp15.000" />
            <Product name="Beras 5kg" price="Rp60.000" />
            <Product name="Sabun Cuci" price="Rp7.000" />
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
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h4 className="font-semibold text-lg">{title}</h4>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-500 text-4xl font-bold mb-2">{number}</div>
      <p>{text}</p>
    </div>
  );
}

function Product({ name, price }: { name: string; price: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center">Gambar</div>
      <h4 className="font-bold text-lg mb-1">{name}</h4>
      <p className="text-blue-500">{price}</p>
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Beli</button>
    </div>
  );
}

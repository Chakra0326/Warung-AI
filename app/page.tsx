import React from 'react';
import Image from 'next/image';
import Logo from '@/public/Logo3.png'; // pastikan file logo3.png ada di /public

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="WarungAI Logo" width={40} height={40} />
            <span className="text-xl font-bold">WarungAI</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#paket" className="hover:underline">Paket</a>
            <a href="#demo" className="hover:underline">Demo</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-blue-100" id="hero">
        <h2 className="text-4xl font-bold mb-4">Digitalisasi Warung Anda</h2>
        <p className="text-lg mb-6">Dapatkan Website Mini Gratis & Kelola Warung Secara Profesional</p>
        <div className="flex justify-center gap-4">
          <a href="/login" className="bg-blue-600 px-6 py-2 text-white rounded-lg">Coba Gratis</a>
          <a href="#paket" className="bg-white border px-6 py-2 text-blue-600 rounded-lg">Lihat Fitur Premium</a>
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
          </div>
        </div>
      </section>

      {/* Paket */}
      <section id="paket" className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Pilih Sesuai Kebutuhan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2">Gratis</h4>
              <ul className="text-left list-disc pl-5">
                <li>Website Mini</li>
                <li>Input 10 Produk</li>
                <li>Integrasi WhatsApp</li>
              </ul>
            </div>
            <div className="border p-6 rounded-lg shadow bg-blue-50">
              <h4 className="text-xl font-bold mb-2">Premium</h4>
              <ul className="text-left list-disc pl-5">
                <li>Produk Unlimited</li>
                <li>Manajemen Stok</li>
                <li>Laporan Keuangan</li>
                <li>Dashboard AI</li>
              </ul>
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

      {/* CTA Ajakan */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Warungmu Bisa Digital Sekarang!</h3>
        <a href="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
          Daftar Sekarang Gratis
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6" id="kontak">
        <p>Email: support@warungai.id</p>
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

function Product({ name, price }: { name: string, price: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center">Gambar</div>
      <h4 className="font-bold text-lg mb-1">{name}</h4>
      <p className="text-blue-500">{price}</p>
      <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Beli</button>
    </div>
  );
}

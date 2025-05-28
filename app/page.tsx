// app/page.tsx
import React from 'react';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 shadow-md h-15 flex-items-center">
        <div className="container mx-auto flex justify-between items-center">
          <img src="Logo3.png" alt="Logo" className="h-17 w-auto"/>
          <nav className="space-x-4">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#cara" className="hover:underline">Cara Kerja</a>
            <a href="#demo" className="hover:underline">Demo</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-blue-100" id="hero">
        <h2 className="text-4xl font-bold mb-4">Digitalisasi Warung Anda Sekarang</h2>
        <p className="text-lg mb-6">Mudah. Cepat. Gratis.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Coba Sekarang
        </button>
      </section>

      {/* Tentang */}
      <section className="py-16 px-4" id="tentang">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Tentang WarungAI</h3>
          <p>
            WarungAI adalah solusi digital untuk warung tradisional agar bisa Go Digital dan lebih kompetitif
            menghadapi era modern.
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
          </div>
        </div>
      </section>

      {/* Cara Kerja */}
      <section className="py-16 px-4" id="cara">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-10">Cara Kerja</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Step number="1" text="Daftar" />
            <Step number="2" text="Isi Produk" />
            <Step number="3" text="Jualan Online" />
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
};

export default HomePage;

// Komponen Tambahan
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

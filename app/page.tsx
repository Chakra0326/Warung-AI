// pages/index.tsx (atau app/page.tsx jika pakai Next.js 13 App Router)

import React from 'react'; import Image from 'next/image';

export default function HomePage() { return ( <main className="min-h-screen bg-white text-gray-800 font-sans"> {/* Header /} <header className="bg-blue-500 text-white py-2 px-4 shadow-md sticky top-0 z-50"> <div className="container mx-auto flex items-center justify-between"> {/ Logo */} <Image
src="/Logo3.png"
alt="WarungAI Logo"
width={150}
height={50}
className="object-contain"
/>

{/* Navigation */}
      <nav className="flex gap-6 text-sm">
        <a href="#fitur" className="hover:underline">Fitur</a>
        <a href="#kategori" className="hover:underline">Kategori</a>
        <a href="#harga" className="hover:underline">Harga</a>
        <a href="#demo" className="hover:underline">Demo</a>
        <a href="#kontak" className="hover:underline">Kontak</a>
      </nav>
    </div>
  </header>

  {/* Hero */}
  <section className="text-center py-20 px-4 bg-blue-100" id="hero">
    <h1 className="text-4xl font-bold mb-4">Digitalisasi Warung Anda Sekarang</h1>
    <p className="text-lg mb-6">Mudah. Cepat. Gratis.</p>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
      Coba Sekarang
    </button>
  </section>

  {/* Fitur */}
  <section className="bg-gray-100 py-16 px-4" id="fitur">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-10">Fitur Unggulan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Feature title="Website Mini Gratis" icon="🖥️" />
        <Feature title="Input Stok & Transaksi" icon="📦" />
        <Feature title="Rekomendasi Barang Laris (AI)" icon="🤖" />
        <Feature title="Terhubung ke WhatsApp" icon="💬" />
        <Feature title="ChatbotAI" icon="🧠" />
        <Feature title="Manajemen Stok & Laporan (Premium)" icon="📊" />
      </div>
    </div>
  </section>

  {/* Kategori */}
  <section className="py-16 px-4 bg-white" id="kategori">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-10">Kategori Produk & Layanan</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <Category name="Sembako" icon="🥫" />
        <Category name="Minuman" icon="🥤" />
        <Category name="ATK & Peralatan" icon="✏️" />
        <Category name="Pulsa & Token" icon="📱" />
        <Category name="Laundry & Jasa" icon="🧺" />
        <Category name="Makanan Siap Saji" icon="🍱" />
        <Category name="Voucher & Game" icon="🎮" />
        <Category name="Lainnya" icon="➕" />
      </div>
    </div>
  </section>

  {/* Harga */}
  <section className="py-16 px-4 bg-blue-50" id="harga">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-8">Paket Gratis & Premium</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <PricingPlan
          title="Gratis"
          price="Rp0"
          features={["Website Mini", "Input Produk 20 item", "Terhubung ke WhatsApp"]}
        />
        <PricingPlan
          title="Premium"
          price="Rp50.000/bulan"
          features={["Produk Unlimited", "Manajemen Stok", "Dashboard & Laporan Laba Rugi"]}
          highlight
        />
      </div>
    </div>
  </section>

  {/* Demo */}
  <section className="py-16 px-4" id="demo">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">Demo Warung: Bu Tini</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Product name="Minyak Goreng" price="Rp15.000" />
        <Product name="Beras 5kg" price="Rp60.000" />
        <Product name="Sabun Cuci" price="Rp7.000" />
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-800 text-white text-center p-6" id="kontak">
    <p>Email: support@warungai.id</p>
    <p>Alamat: Jl. Desa Digital No. 123, Indonesia</p>
    <p className="mt-2">© 2025 WarungAI</p>
  </footer>
</main>

); }

function Feature({ title, icon }: { title: string; icon: string }) { return ( <div className="bg-white p-6 rounded-lg shadow-md text-center"> <div className="text-3xl mb-2">{icon}</div> <h4 className="font-semibold text-lg">{title}</h4> </div> ); }

function Category({ name, icon }: { name: string; icon: string }) { return ( <div className="bg-gray-50 p-4 rounded-lg shadow text-center"> <div className="text-2xl mb-1">{icon}</div> <p className="text-sm font-medium">{name}</p> </div> ); }

function PricingPlan({ title, price, features, highlight = false }: { title: string; price: string; features: string[]; highlight?: boolean; }) { return ( <div className={p-6 rounded-lg shadow-md text-center ${highlight ? 'bg-yellow-100 border border-yellow-400' : 'bg-white'}}> <h4 className="text-xl font-bold mb-2">{title}</h4> <p className="text-lg font-semibold text-blue-500 mb-4">{price}</p> <ul className="text-sm text-left list-disc list-inside mb-4"> {features.map((item, idx) => <li key={idx}>{item}</li>)} </ul> <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{highlight ? 'Langganan' : 'Coba Gratis'}</button> </div> ); }

function Product({ name, price }: { name: string; price: string }) { return ( <div className="bg-white p-4 rounded-lg shadow-md"> <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center">Gambar</div> <h4 className="font-bold text-lg mb-1">{name}</h4> <p className="text-blue-500">{price}</p> <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Beli</button> </div> ); }

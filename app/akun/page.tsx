'use client';

import React from 'react';

export default function AkunPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-xl mx-auto bg-gray-100 rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Profil Saya</h1>
        <p><strong>Nama:</strong> Chakra</p>
        <p><strong>Email:</strong> abdichakrawibawa@gmail.com</p>

        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded">
          Keluar
        </button>
      </div>
    </main>
  );
}

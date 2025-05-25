import React from 'react'
import { ShoppingCart } from 'lucide-react';

export default function Funcionamiento() {
  return (
    <div className='flex bg-gradient-to-br from-amber-50 to-[#c69d46] px-4 py-8 rounded-xl shadow-lg'>
      <div className='px-3 flex items-center'>
        <ShoppingCart size={40} className='text-white' />
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className='font-semibold text-red-500 text-xl'>
          ¿Cómo funciona?
        </h3>

        <p className="text-black">
          <strong>1. Explora productos únicos</strong><br/>
          Descubre artesanías auténticas elaboradas a mano por talentosos artesanos colombianos.
        </p>
        <p className="text-black">
          <strong>2. Compra de forma segura</strong><br/>
          Agrega tus favoritos al carrito y realiza tu pedido con confianza, sin complicaciones.
        </p>
        <p className="text-black">
          <strong>3. Recibe en tu hogar</strong><br/>
          Nosotros te llevamos lo mejor del arte artesanal directamente a tu puerta.
        </p>
      </div>
    </div>
  )
}

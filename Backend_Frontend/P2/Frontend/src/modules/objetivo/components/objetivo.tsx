import React from 'react'
import { Handshake } from 'lucide-react';


export default function Objetivo() {
    return (
        <div className='flex bg-gradient-to-br from-amber-50 to-[#c69d46] px-4 py-8 rounded-xl shadow-lg'>
            <div className='px-3 flex items-center'>
                <Handshake size={40} className='text-white' />
            </div>
            
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-red-500 text-xl'>
                    Misión del sitio
                </h3>
                <p className="text-black text-justify">
                    Nuestro objetivo es apoyar a los artesanos locales brindándoles una
                    plataforma para dar a conocer y vender sus productos de manera segura
                    y accesible.
                </p>
            </div>
        </div>
    )
}

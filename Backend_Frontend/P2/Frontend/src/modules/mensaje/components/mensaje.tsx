import React from 'react';
import { Sparkles } from 'lucide-react'; // Puedes cambiar el ícono si prefieres otro

export default function Mensaje() {
  return (
    <div className="flex bg-gradient-to-br from-yellow-100 to-yellow-400 px-4 py-6 rounded-xl shadow-lg">
      <div className="px-3 flex items-center">
        <Sparkles size={40} className="text-white" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-green-800 text-xl">
          ¡Empieza tu experiencia!
        </h3>
        <p className="text-black text-justify">
          Explora productos únicos, apoya a nuestros artesanos y lleva a casa piezas llenas de historia y tradición.
        </p>
      </div>
    </div>
  );
}

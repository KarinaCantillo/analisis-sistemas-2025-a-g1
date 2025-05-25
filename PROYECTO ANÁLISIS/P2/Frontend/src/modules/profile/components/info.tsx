import Image from "next/image";
import React from "react";

export default function Info() {
  return (
    <div className="flex gap-2 w-full items-center">
      <Image src="/logo-cuadrado-blanco.png" alt="Logo Corhuila" width={100} height={50} />
      <div>
        <h1 className="text-black text-sm uppercase font-bold">Correos</h1>
        <p className="text-white text-sm">dmpereira-2032b@corhuila.edu.co</p>
        <p className="text-white text-sm">kcantillo-2032bb@corhuila.edu.co</p>
      </div>
    </div>
  );
}

import React from 'react';

export default function Porcentaje({ label = "Asistencias", percent = 80 }) {
  // Para usar el porcentaje en ancho, se convierte a string con "%"
  const widthPercent = `${percent}%`;

  return (
    <div className="flex flex-col">
      <p className="text-black font-semibold mb-1">
        {label} <span className="font-normal">{percent}%</span>
      </p>
      <div 
        className="w-full h-5 rounded-full bg-neutral-300 dark:bg-neutral-700"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label} progreso`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 transition-all duration-500"
          style={{ width: widthPercent }}
        />
      </div>
    </div>
  );
}

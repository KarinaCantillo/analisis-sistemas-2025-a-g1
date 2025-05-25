import Porcentaje from '@/modules/components/porcentajes.component';
import Texto from '@/modules/components/texto.component';
import Layout from '@/modules/layout/layout';
import { eventos, subastas } from '@/modules/notification/components/notificaciones';
import React from 'react';

export default function Notification() {
  return (
    <Layout>
      <section className="mt-12">
        <article className="flex items-center gap-5 mb-10">
          <div className="bg-gradient-to-br from-amber-500 to-amber-800 rounded-xl p-4 relative flex items-center ml-3">
            <span className="border-r border-neutral-700 w-[1px] h-10 absolute -bottom-10"></span>
          </div>
          <h2 className="text-2xl text-orange-700 font-semibold">Eventos</h2>
        </article>

        {eventos.map((evento, index) => (
          <Texto
            key={index}
            title={evento.title}
            date={evento.date}
            description={evento.description}
            isLast={index === eventos.length - 1}
          />
        ))}
      </section>

      <section className="mt-10">
        <article className="flex items-center gap-5">
          <div className="bg-gradient-to-br from-amber-500 to-amber-800 rounded-xl p-4 relative items-center ml-3">
            <span className="border-r border-neutral-700 w-[1px] h-6 absolute -bottom-6 "></span>
          </div>
          <h2 className="text-2xl text-orange-700 font-semibold">Subastas</h2>
        </article>

        {subastas.map((subasta, index) => (
          <Texto
            key={index}
            title={subasta.title}
            date={subasta.date}
            description={subasta.description}
            isLast={index === subastas.length - 1}
          />
        ))}
      </section>

      <section className='mt-10'>
        <h2 className='text-2xl text-black font-semibold'>Porcentajes</h2>
        <article className='bg-gradient-to-br bg-amber-50 rounded-xl p-4 flex flex-col mt-5'>
          <Porcentaje label="Asistencias" percent={80} />
          <Porcentaje label="Ventas" percent={65} />
          <Porcentaje label="Satisfacción" percent={90} />
        </article>
      </section>

    </Layout>
  );
}

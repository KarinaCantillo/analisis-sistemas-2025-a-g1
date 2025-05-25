import Layout from "@/modules/layout/layout";
import React from "react";

export default function PageContact() {
  return (
    <Layout>
      <section className="mt-5 flex flex-col gap-6 p-4 mx-auto w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.60041667331!2d-75.26769442467625!3d2.9305992970457266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74117f5cbb31%3A0x3888eaf55f8a881d!2sCorporaci%C3%B3n%20Universitaria%20del%20Huila%20-%20Sede%20Prado%20Alto!5e0!3m2!1ses!2sco!4v1747642971395!5m2!1ses!2sco"
          width="700"
          height="600"
          className="w-full rounded-2xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="bg-gradient-to-br from-amber-50 to-[#c69d46] text-black p-6 rounded-xl shadow-lg border border-neutral-700">
          <h2 className="text-2xl font-semibold mb-2">Nuestra Ubicación</h2>
          <p className="text-lg">
            📍 <strong>Dirección:</strong> Calle 8 #32-49, Barrio Prado Alto
          </p>
          <p className="text-lg">
            🌎 <strong>País/Departamento:</strong> Colombia/Huila
          </p>
          <p className="mt-2 text-base text-black">
            Estamos ubicados en una zona tranquila y accesible de Neiva, ideal
            para estudiantes y visitantes. Contamos con fácil acceso al
            transporte público y una vista privilegiada hacia las montañas del
            Huila.
          </p>
        </div>
      </section>
    </Layout>
  );
}

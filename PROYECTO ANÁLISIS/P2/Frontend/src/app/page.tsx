"use client"

import Layout from "@/modules/layout/layout";
import Objetivo from "@/modules/objetivo/components/objetivo";
import Funcionamiento from '../modules/funcionamiento/components/funcionamiento';
import Mensaje from "@/modules/mensaje/components/mensaje";

export default function Home() {

  return (
    <Layout>
      <section className="text-black">
        <h1 className="text-justify">
          Descubre un espacio donde la tradición, la creatividad y el talento local se unen.
          Este marketplace conecta a artesanos de todo el país con personas que valoran lo hecho a mano,
          lo auténtico y lo único. Aquí encontrarás productos con historia, elaborados con dedicación y
          técnicas ancestrales que merecen ser compartidas. Apoya el trabajo de manos expertas y forma
          parte del cambio hacia un consumo más consciente.
        </h1>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="flex flex-col gap-3">
            <Objetivo />
            <Mensaje /> 
          </div>
          <Funcionamiento />
        </div>
      </section>

    </Layout>
  );
}

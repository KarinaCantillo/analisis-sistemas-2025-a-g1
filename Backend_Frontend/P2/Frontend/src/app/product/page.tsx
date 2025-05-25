"use client"; // IMPORTANTE: habilita el uso de hooks en app router

import React, { useEffect } from "react";
import Layout from "@/modules/layout/layout";
import Articulo from "@/modules/components/articulo.component";
import { useProductStore } from "@/stores/product.store";
import { obtenerImagen } from "@/modules/funciones/image";

export default function Product() {
  const { products, getProducts } = useProductStore();

  useEffect(() => {
    getProducts(); // Cargar productos desde el backend al montar el componente
  }, []);

  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.length === 0 && <p>Cargando productos...</p>}

        {products.map((item) => (
          <Articulo
            key={item.id}
            nombre={item.product}
            descripcion={`Precio: $${item.price} - Artesano: ${item.artisan}`}
            categoria={item.category}
            fecha={item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}
            imagen={obtenerImagen(item.product)}
          />
        ))}
      </section>
    </Layout>
  );
}

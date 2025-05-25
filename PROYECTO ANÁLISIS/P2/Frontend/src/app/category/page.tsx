// src/pages/categorias/index.tsx
"use client";

import React, { useEffect } from 'react';
import Layout from '@/modules/layout/layout';
import Categorias from '@/modules/categorias/components/categorias';
import { useCategoryStore } from '@/stores/category.store';
import { getImageForCategory } from '@/modules/funciones/categoriaImagenes';

export default function CategoriasPage() {
  const { categories, getCategories } = useCategoryStore();

  useEffect(() => {
    getCategories(); // Cargar las categorías al montar
  }, [getCategories]);

  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(({ id, name, description }) => (
          <Categorias
            key={id}
            imageSrc={getImageForCategory(name)}
            title={name}
            description={description}
          />
        ))}
      </section>
    </Layout>
  );
}

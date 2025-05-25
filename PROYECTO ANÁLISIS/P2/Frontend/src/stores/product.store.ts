// src/stores/product.store.ts
import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

// Interfaz basada en el nuevo modelo Product
interface Product {
  id: string;
  product: string;
  price: number;
  artisan: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type ProductStore = {
  products: Product[];
  getProducts: () => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  getProducts: async () => {
    console.log("Base URL axiosClient:", axiosClient.defaults.baseURL); // útil para debug
    try {
      const { data } = await axiosClient.get<Product[]>("/product"); // 👈 nuevo endpoint
      console.log("Datos recibidos:", data); // opcional para debug
      set({ products: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

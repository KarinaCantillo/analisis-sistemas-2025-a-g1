import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

// Modelo basado en tu esquema Prisma
interface Category {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;
}

type CategoryStore = {
  categories: Category[];
  getCategories: () => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  getCategories: async () => {
    console.log("Llamando a /category desde category.store.ts");
    try {
      const { data } = await axiosClient.get<Category[]>("/category");
      console.log("Categorías recibidas:", data);
      set({ categories: data });
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  },
}));

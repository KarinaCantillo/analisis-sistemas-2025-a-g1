// src/stores/order.store.ts
import { create } from "zustand";
import { axiosClient } from "@/services/axios.service";

interface Order {
  id?: string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone?: string;
  shippingAddress: string;
  city: string;
  productName: string;
  quantity: number;
  total: number;
  paymentMethod: string;
  createdAt?: Date;
}

type OrderStore = {
  createOrder: (order: Omit<Order, "id" | "createdAt">) => Promise<void>;
};

export const useOrderStore = create<OrderStore>(() => ({
  createOrder: async (order) => {
    try {
      await axiosClient.post("/order", order);
      console.log("Pedido creado correctamente");
    } catch (error) {
      console.error("Error al crear pedido:", error);
    }
  },
}));

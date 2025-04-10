import { api } from "./api";

export interface CartItem {
  dish_id: number;
  name: string;
  quantity: number;
}

export interface Cart {
  id: number;
  created_at: string;
  cart_items?: CartItem[];
  created_by: string;
}

export class CartsService {
  static async createCart(cartItems: CartItem[]): Promise<number> {
    try {
      const response = await api.post<{ id: number }>("/carts", { cart_items: cartItems });
      return response.data.id;
    } catch (error) {
      console.error("Erro ao criar carrinho:", error);
      throw error;
    }
  }

  static async getCartById(id: number): Promise<Cart> {
    try {
      const response = await api.get<Cart>(`/carts/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar carrinho:", error);
      throw error;
    }
  }

  static async listCarts(): Promise<Cart[]> {
    try {
      const response = await api.get<Cart[]>("/carts");
      return response.data;
    } catch (error) {
      console.error("Erro ao listar carrinhos:", error);
      throw error;
    }
  }

  static async deleteCart(id: number): Promise<void> {
    try {
      await api.delete(`/carts/${id}`);
    } catch (error) {
      console.error("Erro ao excluir carrinho:", error);
      throw error;
    }
  }

  static async updateCart(id: number, cartItems: CartItem[]): Promise<void> {
    try {
      const payload = { cart_items: cartItems };
      await api.patch(`/carts/${id}`, payload);
    } catch (error) {
      console.error("Erro ao atualizar carrinho:", error);
      throw error;
    }
  }
}

import { api } from "./api";

export interface CartItem {
  dish_id: number;
  name: string;
  quantity: number;
}

export interface Cart {
  id: number;
  cart_items: CartItem[];
}

export class CartsService {
  static async getCarts(): Promise<Cart[]> {
    try {
      const response = await api.get<Cart[]>("/carts");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar carrinhos:", error);
      throw error;
    }
  }

  static async createCart(cartItems: CartItem[]): Promise<void> {
    try {
      await api.post("/carts", { cart_items: cartItems });
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
      console.error("Erro ao buscar detalhes do carrinho:", error);
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
}

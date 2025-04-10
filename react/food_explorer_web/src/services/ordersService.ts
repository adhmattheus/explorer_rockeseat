import { api } from "./api";

export interface OrderItem {
  dish_id: number;
  name?: string; // Optional for admin view
  quantity: number;
}

export interface Order {
  id: number;
  status: string;
  price: number;
  payment_method: string;
  created_at: string;
  created_by?: string; // Only for admin view
  dishes: OrderItem[];
}

export class OrdersService {
  static async getOrders(): Promise<Order[]> {
    try {
      const response = await api.get<Order[]>("/orders");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
      throw error;
    }
  }

  static async createOrder(orderData: {
    status: string;
    price: number;
    payment_method: string;
    order_items: OrderItem[];
  }): Promise<void> {
    try {
      await api.post("/orders", orderData);
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      throw error;
    }
  }

  static async getOrderById(id: number): Promise<Order> {
    try {
      const response = await api.get<Order>(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar detalhes do pedido:", error);
      throw error;
    }
  }

  static async deleteOrder(id: number): Promise<void> {
    try {
      await api.delete(`/orders/${id}`);
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
      throw error;
    }
  }

  static async updateOrderStatus(id: number, status: string): Promise<void> {
    try {
      const validStatuses = ["open", "done"];
      if (!validStatuses.includes(status)) {
        throw new Error("Status inválido.");
      }

      await api.patch(`/orders/${id}`, { status });
    } catch (error) {
      console.error("Erro ao atualizar status do pedido:", error);
      throw error;
    }
  }
}

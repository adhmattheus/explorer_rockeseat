import { api } from "./api";

export interface Favorite {
  id: number;
  dish_id: number;
}

export class FavoritesService {
  static async getFavorites(): Promise<Favorite[]> {
    try {
      const response = await api.get<Favorite[]>("/favorites");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error);
      throw error;
    }
  }

  static async addFavorite(dishId: number): Promise<void> {
    try {
      await api.post("/favorites", { dish_id: dishId });
    } catch (error) {
      console.error("Erro ao adicionar favorito:", error);
      throw error;
    }
  }

  static async removeFavorite(dishId: number): Promise<void> {
    try {
      await api.delete(`/favorites`, { params: { dish_id: dishId } });
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
      throw error;
    }
  }
}

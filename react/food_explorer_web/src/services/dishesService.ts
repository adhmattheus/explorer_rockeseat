import { api } from "./api";

export interface Ingredient {
  id: number;
  name: string;
}

export interface Dish {
  id?: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  ingredients: Ingredient[];
}

export type CreateDish = {
  name: string;
  description: string;
  category: string;
  price: number;
  image: File;
  ingredients: string[];
};

export class DishesService {
  static async getDishes(): Promise<Dish[]> {
    try {
      const response = await api.get<Dish[]>("/dishes");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
      throw error;
    }
  }

  static async createDish(dish: CreateDish): Promise<void> {
    try {
      const formData = new FormData();
      formData.append("name", dish.name);
      formData.append("description", dish.description);
      formData.append("category", dish.category);
      formData.append("price", String(dish.price));
      formData.append("image", dish.image);
      formData.append("ingredients", dish.ingredients.join(", "));

      await api.post("/dishes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      console.error("Erro ao salvar prato:", e);
      alert("Erro ao salvar prato: " + e);
    }    
  }

  static async getDishById(id: number): Promise<Dish> {
    try {
      const response = await api.get<Dish>(`/dishes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar prato:", error);
      throw error;
    }
  }

  static async updateDish(id: number, dish: CreateDish): Promise<void> {
    try {
      await api.patch(`/dishes/${id}`, dish, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Erro ao atualizar prato:", error);
      throw error;
    }
  }
  
  static async deleteDish(id: number): Promise<void> {
    try {
      await api.delete(`/dishes/${id}`);
    } catch (error) {
      console.error("Erro ao excluir prato:", error);
      throw error;
    }
  }
}

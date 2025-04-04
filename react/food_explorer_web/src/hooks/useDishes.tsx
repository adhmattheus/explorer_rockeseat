import { useEffect, useState } from "react";
import {
  CreateDish,
  Dish,
  DishesService,
} from "../services/dishesService";

export const useDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false); // loading separado para criação

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    setLoading(true);
    try {
      const data = await DishesService.getDishes();
      setDishes(data);
    } catch (error) {
      setError("Erro ao carregar pratos.");
    } finally {
      setLoading(false);
    }
  };

  const createDish = async (dish: CreateDish) => {
    setCreating(true);
    try {
      await DishesService.createDish(dish);
    } catch (e) {
      setError("Erro ao criar prato.");
      throw e;
    } finally {
      setCreating(false);
    }
  };

  return {
    dishes,
    loading,
    error,
    createDish,
    creating, 
  };
};

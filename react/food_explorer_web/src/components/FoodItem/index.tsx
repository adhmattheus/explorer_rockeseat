import { useEffect, useState } from "react";
import { FiEdit2, FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { Button } from "../../components/Button";
import { CartsService } from "../../services/cartsService"; // Import CartsService
import { FavoritesService } from "../../services/favoritesService";
import { Toaster } from "../Toaster";
import { Container, NumberContainer, Order, Title } from "./styles";

interface FoodItemProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  isAdmin?: boolean;
  onEditClick?: (id: number) => void;
  onViewClick?: (id: number) => void;
}

export function FoodItem({
  id,
  name,
  description,
  price,
  image,
  isAdmin,
  onEditClick,
  onViewClick,
}: FoodItemProps) {
  const [number, setNumber] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  useEffect(() => {
    async function checkIfFavorite() {
      try {
        const favorites = await FavoritesService.getFavorites();
        setIsFavorite(favorites.some((favorite) => favorite.dish_id === id));
      } catch (error) {
        console.error("Erro ao verificar favoritos:", error);
      }
    }
    checkIfFavorite();
  }, [id]);

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await FavoritesService.removeFavorite(id);
        setIsFavorite(false);
      } else {
        await FavoritesService.addFavorite(id);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Erro ao atualizar favoritos:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      // Use the create method to handle both creating and updating the cart
      await CartsService.createCart([{ dish_id: id, name, quantity: number }]);

      // Dispatch a custom event to update the cart count in the header
      window.dispatchEvent(new Event("cartUpdated"));

      // Reset the item quantity to 1
      setNumber(1);

      setShowToaster(true);
      setTimeout(() => setShowToaster(false), 3000); // Hide toaster after 3 seconds
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);

      // Ensure the header updates to show 0 if the cart is empty
      window.dispatchEvent(new Event("cartUpdated"));
    }
  };

  return (
    <Container>
      {isAdmin ? (
        <FiEdit2 size={"2.4rem"} onClick={() => onEditClick?.(id)} />
      ) : (
        <FiHeart
          size={"2.4rem"}
          onClick={handleFavoriteClick}
          color={isFavorite ? "#FF6B6B" : "inherit"}
          fill={isFavorite ? "#FF6B6B" : "none"}
          style={{ transition: "color 0.3s, fill 0.3s" }}
        />
      )}
      <img
        src={image}
        alt={`Imagem do ${name}`}
        onClick={() => onViewClick?.(id)}
      />
      <Title>
        <h2>{name}</h2>
        <RxCaretRight />
      </Title>
      <p>{description}</p>
      <span>{price}</span>
      {!isAdmin && (
        <Order>
          <NumberContainer>
            <button onClick={decrementNumber}>
              <FiMinus />
            </button>
            <span>{number < 10 ? `0${number}` : number}</span>
            <button onClick={incrementNumber}>
              <FiPlus />
            </button>
          </NumberContainer>
          <Button title="Incluir" onClick={handleAddToCart} /> {/* Add onClick */}
        </Order>
      )}
      {showToaster && <Toaster message="Item adicionado ao carrinho!" />}
    </Container>
  );
}

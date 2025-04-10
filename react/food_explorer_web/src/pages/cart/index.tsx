import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { CartsService } from "../../services/cartsService";
import { DishesService } from "../../services/dishesService";
import { Category } from "../dish/new/styles";
import { CartItem, CartList, ConfirmButton, Container, PaymentContainer, QuantityControls, RemoveButton, SaveCartButton, TotalPriceContainer } from "./styles";

interface CartItemDetails {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItemDetails[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [activeCartId, setActiveCartId] = useState<number | null>(null); 
  const { user } = useAuth();
  
  function formatPrice(value: number): string {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function updateTotalPrice(items: CartItemDetails[]) {
    setTotalPrice(items.reduce((sum, item) => sum + item.total, 0));
  }

  function handleIncreaseQuantity(id: number) {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
        : item
    );
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems);
  }

  function handleDecreaseQuantity(id: number) {
    const updatedItems = cartItems
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove items with quantity 0
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems);
  }

  function handleRemoveItem(id: number) {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems);
  }

  async function handleSaveCart() {
    if (activeCartId) {
      try {
        const updatedCartItems = cartItems.map(({ id, name, quantity }) => ({
          dish_id: id,
          name,
          quantity,
        }));
        await CartsService.updateCart(activeCartId, updatedCartItems);

        // Fetch the updated cart to ensure the UI reflects the changes
        const updatedCart = await CartsService.getCartById(activeCartId);
        const dishes = await DishesService.getDishes();

        const items = updatedCart.cart_items?.map((item) => {
          const dish = dishes.find((dish) => dish.id === item.dish_id);
          const price = dish ? dish.price : 0;
          return {
            id: item.dish_id,
            name: item.name,
            quantity: item.quantity,
            price,
            total: price * item.quantity,
          };
        }) || [];

        setCartItems(items);
        updateTotalPrice(items);

        // Dispatch event to update the cart count in the header
        window.dispatchEvent(new Event("cartUpdated"));

        alert("Carrinho salvo com sucesso!");
      } catch (error) {
        console.error("Erro ao salvar o carrinho:", error);
        alert("Erro ao salvar o carrinho.");
      }
    } else {
      alert("Nenhum carrinho ativo para salvar.");
    }
  }

  useEffect(() => {
    async function fetchCart() {
      try {
        const carts = await CartsService.listCarts();
        const activeCart = carts.find(cart => cart.created_by === user?.id); 

        if (activeCart) {
          setActiveCartId(activeCart.id); // Set active cart ID
          const cartDetails = await CartsService.getCartById(activeCart.id);
          const dishes = await DishesService.getDishes();

          const items = cartDetails.cart_items?.map((item) => {
            const dish = dishes.find((dish) => dish.id === item.dish_id);
            const price = dish ? dish.price : 0;
            return {
              id: item.dish_id,
              name: item.name,
              quantity: item.quantity,
              price,
              total: price * item.quantity,
            };
          }) || [];

          setCartItems(items);
          updateTotalPrice(items);
        }
      } catch (error) {
        console.error("Erro ao carregar o carrinho:", error);
      }
    }

    fetchCart();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <h1>Meu Carrinho</h1>
        <CartList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <p><strong>{item.name}</strong></p>
              <QuantityControls>
                <p>Quantidade:</p>
                <span>{item.quantity}</span>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </QuantityControls>
              <p>Preço unitário: {formatPrice(item.price)}</p>
              <p>Total: {formatPrice(item.total)}</p>
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>Excluir</RemoveButton>
            </CartItem>
          ))}
        </CartList>
        <TotalPriceContainer>
          <h2>Total do Carrinho: {formatPrice(totalPrice)}</h2>
          <SaveCartButton onClick={handleSaveCart}>
            Salvar Carrinho
          </SaveCartButton>
        </TotalPriceContainer>
        
        <PaymentContainer>
          <Category className="payment-method">
            <label htmlFor="payment-method">
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value)}
              >
                <option value="">Selecione o método de pagamento</option>
                <option value="pix">PIX</option>
                <option value="credit_card">Cartão de Crédito</option>
                <option value="cash">Dinheiro</option>
              </select>
              <RiArrowDownSLine size={"2.4rem"} />
            </label>
          </Category>
          <ConfirmButton
            disabled={!paymentMethod}
            onClick={() => alert("Pedido confirmado!")}
          >
            <strong>Confirmar pedido</strong>
          </ConfirmButton>
        </PaymentContainer>
      </main>
      <Footer />
    </Container>
  );
}

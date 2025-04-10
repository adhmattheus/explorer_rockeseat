import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { CartsService } from "../../services/cartsService";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, CartIcon, Container, InputButton, Logo, Logout } from "./styles";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    async function fetchCartItemCount() {
      try {
        const carts = await CartsService.listCarts();
        const activeCart = carts.find(cart => cart.created_by === user?.id);

        if (activeCart) {
          const cartDetails = await CartsService.getCartById(activeCart.id);
          setCartItemCount(
            cartDetails.cart_items?.reduce((total, item) => total + item.quantity, 0) || 0
          );
        } else {
          setCartItemCount(0);
        }
      } catch (error) {
        setCartItemCount(0);
      }
    }

    if (user?.id) {
      fetchCartItemCount();
    }

    function handleCartUpdate() {
      fetchCartItemCount();
    }

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, [user?.id]);

  function handleButtonClick() {
    if (user?.is_admin) {
      navigate("/new");
    } else {
      navigate("/orders");
    }
  }

  function handleUsersClick() {
    navigate("/users");
  }

  function handleCartClick() {
    navigate("/cart");
  }

  return (
    <Container>
      <Logo onClick={() => navigate("/home")}>
        <img
          src={
            user?.is_admin
              ? "../../../src/assets/logo_header_adm.png"
              : "../../../src/assets/logo_header.png"
          }
          alt="Logo"
        />
      </Logo>

      <Input icon={BiSearch} placeholder="Busque por pratos ou ingredientes" />

      <ButtonContainer>
        <InputButton>
          <Button
            title="Pedidos"
            onClick={() => navigate("/orders")}
          />
        </InputButton>

        {user?.is_admin ? (
          <InputButton>
            <Button
              title="Novo prato"
              onClick={() => navigate("/new")}
            />
          </InputButton>
        ) : null}

        {user?.is_admin ? (
          <InputButton>
            <Button
              title="Usuários"
              onClick={handleUsersClick}
            />
          </InputButton>
        ) : null}
      </ButtonContainer>

      {!user?.is_admin && (
        <CartIcon onClick={handleCartClick}>
          <BsCart3 size={"2.4rem"} />
          <span>{cartItemCount}</span>
        </CartIcon>
      )} 

      <Logout onClick={signOut}>
        <FiLogOut size={"3.2rem"} />
      </Logout>
    </Container>
  );
}

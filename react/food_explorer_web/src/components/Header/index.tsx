import { BiSearch } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, Container, InputButton, Logo, Logout } from "./styles";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

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
            title={user?.is_admin ? "Novo prato" : "Pedidos"}
            isCustomer={!user?.is_admin}
            onClick={handleButtonClick}
          />
        </InputButton>

        {user?.is_admin && (
          <InputButton>
            <Button
              title="Usuários"
              onClick={handleUsersClick}
            />
          </InputButton>
        )}
      </ButtonContainer>

      <Logout onClick={signOut}>
        <FiLogOut size={"3.2rem"} />
      </Logout>
    </Container>
  );
}

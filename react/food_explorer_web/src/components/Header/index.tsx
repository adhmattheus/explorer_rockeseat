import { BiSearch } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, InputButton, Logo, Logout } from "./styles";

export function Header() {
  const { signOut, user } = useAuth(); 
  const navigate = useNavigate(); 

  function handleButtonClick() {
    console.log(user?.is_admin)
    if (user?.is_admin) {
      navigate("/new"); // Navega para a página de criação de pratos
    } else {
      navigate("/home"); // Navega para a página inicial (ou outra página para clientes)
    }
  }

  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo_header.png" alt="Logo" />
      </Logo>

      <Input icon={BiSearch} placeholder="Busque por pratos ou ingredientes" />

      <InputButton>
        <Button
          title={user?.is_admin ? "Novo prato" : "Pedidos"}
          isCustomer={!user?.is_admin}
          onClick={handleButtonClick} 
        />
      </InputButton>

      <Logout onClick={signOut}>
        <FiLogOut size={"3.2rem"} />
      </Logout>
    </Container>
  );
}

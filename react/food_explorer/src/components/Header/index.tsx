import { BiSearch } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, InputButton, Logo, Logout } from "./styles";

export function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo_header.png" alt="Logo" />
      </Logo>

      <Input icon={BiSearch} placeholder="Busque por pratos ou ingredientes" />

      <InputButton>
        <Button isCustomer title="Pedidos" />
      </InputButton>

      <Logout onClick={() => navigate("/")}>
        <FiLogOut size={"3.2rem"} />
      </Logout>
    </Container>
  );
}

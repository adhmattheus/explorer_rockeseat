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
    if (user?.is_admin) {
      navigate("/new"); 
    } else {
      navigate("/home");  
    }
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

import { Container, Copyright, Logo } from "./styles";

import logo from "../../assets/logo_footer.png";

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      <Copyright>© 2025 - Todos os direitos reservados.</Copyright>
    </Container>
  );
}

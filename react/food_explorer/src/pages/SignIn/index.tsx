import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Content, Form, Logo } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo.png" alt="Logo" />
      </Logo>

      <Content>
        <Form>
          <span>Faça seu login</span>
          <Input title="Email:" placeholder="E-mail" type="text" />
          <Input title="Senha:" placeholder="Password" type="password" />
          <Button title="Entrar" />
          <Link to="/register">Criar conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

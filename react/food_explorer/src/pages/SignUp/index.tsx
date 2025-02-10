import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Content, Form, Logo } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo.png" alt="Logo" />
      </Logo>
      <Content>
        <Form>
          <span>Crie sua conta</span>
          <Input title="Nome:" placeholder="name" type="text" />
          <Input title="Email:" placeholder="E-mail" type="text" />
          <Input title="Senha:" placeholder="Password" type="password" />
          <Button title="Criar conta" />
          <Link to="/">Já tenho uma cnta</Link>
        </Form>
      </Content>
    </Container>
  );
}

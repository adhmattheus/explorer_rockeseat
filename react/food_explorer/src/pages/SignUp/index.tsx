import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Content, Form, InputContent, Logo } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo.png" alt="Logo" />
      </Logo>
      <Content>
        <Form>
          <span>Crie sua conta</span>
          <InputContent>
          <label>Nome:</label>
            <Input title="Nome:" placeholder="nome" type="text" />
          </InputContent>
          <InputContent>
            <label>Email:</label>
            <Input title="E-mail:" placeholder="E-mail" type="text" />
          </InputContent>
          <InputContent>
            <label>Senha:</label>
            <Input title="Senha:" placeholder="Senha" type="password" />
          </InputContent>
          <Button title="Criar conta" />
          <Link to="/">Já tenho uma cnta</Link>
        </Form>
      </Content>
    </Container>
  );
}

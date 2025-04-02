import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Content, Form, InputContent, Logo } from "./styles";

export function SignIn() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo.png" alt="Logo" />
      </Logo>

      <Content>
        <Form>
          <span>Faça seu login</span>
          <InputContent>
            <label>Email:</label>
            <Input title="E-mail:" placeholder="E-mail" type="text" />
          </InputContent>
          <InputContent>
            <label>Senha:</label>
            <Input title="Senha:" placeholder="Senha" type="password" />
          </InputContent>
          <Button onClick={() => navigate("/home")} title="Entrar" />
          <Link to="/register">Criar conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

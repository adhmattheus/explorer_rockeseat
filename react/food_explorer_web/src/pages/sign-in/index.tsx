/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { Container, Content, Form, InputContent, Logo } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

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
            <Input
              title="E-mail:"
              placeholder="E-mail"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContent>
          <InputContent>
            <label>Senha:</label>
            <Input
              title="Senha:"
              placeholder="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContent>
          <Button onClick={handleSignIn} title="Entrar" />
          <Link to="/register">Criar conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

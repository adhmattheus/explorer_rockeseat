import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UsersService } from "../../services/usersService";
import { Container, Content, Form, InputContent, Logo } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    try {
      await UsersService.createUser({ name, email, password, is_admin: false });
      alert("Usuário criado com sucesso!");
      setName(""); // Reset name
      setEmail(""); // Reset email
      setPassword(""); // Reset password
    } catch (err) {
      setError("Erro ao criar usuário. Tente novamente.");
    }
  }

  return (
    <Container>
      <Logo>
        <img src="../../../src/assets/logo.png" alt="Logo" />
      </Logo>
      <Content>
        <Form onSubmit={handleSignUp}>
          <span>Crie sua conta</span>
          <InputContent>
            <label>Nome:</label>
            <Input
              title="Nome:"
              placeholder="nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputContent>
          <InputContent>
            <label>Email:</label>
            <Input
              title="E-mail:"
              placeholder="E-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContent>
          <InputContent>
            <label>Senha:</label>
            <Input
              title="Senha:"
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContent>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button title="Criar conta" type="submit" />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </Content>
    </Container>
  );
}

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />
      <h1>Details</h1>
      <Button title="Voltar" />
    </Container>
  );
}

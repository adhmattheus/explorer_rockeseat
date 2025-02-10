import { Container } from "./styles";

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading, ...rest }: ButtonProps) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}

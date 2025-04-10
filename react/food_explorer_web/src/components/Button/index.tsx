import { Container } from "./styles";

interface ButtonProps {
  title?: string;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  customStyles?: React.CSSProperties;
}

export function Button({
  title,
  loading = false,
  customStyles,
  ...rest
}: ButtonProps) {
  return (
    <Container type="button" disabled={loading} style={customStyles} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}

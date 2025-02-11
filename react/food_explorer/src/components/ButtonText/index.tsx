import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
}

export function ButtonText({ children, ...rest }: ButtonTextProps) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}

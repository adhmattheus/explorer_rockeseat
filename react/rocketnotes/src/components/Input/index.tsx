import { Container } from "./styles";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<{ size: number }>;
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}

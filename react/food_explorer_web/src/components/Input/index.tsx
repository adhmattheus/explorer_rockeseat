import { Container, Field } from "./styles";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<{ size: number }>;
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      <Field>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </Field>
    </Container>
  );
}

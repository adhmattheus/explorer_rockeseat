import { Container, Field } from "./styles";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<{ size: number }>;
  title?: string;
}

export function Input({ icon: Icon, title, ...rest }: InputProps) {
  return (
    <Container>
      <label>{title}</label>
      <Field>
        {Icon && <Icon size={24} />}
        <input {...rest} />
      </Field>
    </Container>
  );
}

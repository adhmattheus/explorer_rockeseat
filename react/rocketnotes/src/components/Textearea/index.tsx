import { Container } from "./styles";

interface TextareaProps {
  value?: string;
  placeholder?: string;
}

export function Textarea({ value, ...rest }: TextareaProps) {
  return <Container {...rest}>{value}</Container>;
}
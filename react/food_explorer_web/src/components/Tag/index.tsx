import { Container } from "./styles";

interface TagProps {
  title: string;
    onClick?: () => void;
}

export function Tag({ title, ...rest }: TagProps) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  );
}
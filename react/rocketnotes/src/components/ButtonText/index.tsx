import { Container } from "./styles";

interface ButtonTextProps {
  title: string;
  $isactive?: boolean;
}

export function ButtonText({
  title,
  $isactive = false,
  ...rest
}: ButtonTextProps) {
  return (
    <Container {...rest} type="button" $isactive={$isactive.toString()}>
      {title}
    </Container>
  );
}

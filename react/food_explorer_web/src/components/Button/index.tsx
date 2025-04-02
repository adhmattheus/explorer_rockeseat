import { TbReceipt } from "react-icons/tb";
import { Container } from "./styles";

interface ButtonProps {
  title?: string;
  loading?: boolean;
  isCustomer?: boolean;
  orderCount?: number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; 
}

export function Button({
  title,
  loading = false,
  isCustomer,
  ...rest
}: ButtonProps) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {isCustomer && <TbReceipt size={"3.2rem"} />}
      {loading ? "Carregando..." : title}
      {isCustomer && <span>(${rest.orderCount})</span>}
    </Container>
  );
}

import { useEffect, useState } from "react";
import { Container } from "./styles";

interface ToasterProps {
  message: string;
  duration?: number; // Duration in milliseconds
}

export function Toaster({ message, duration = 3000 }: ToasterProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <Container>{message}</Container>;
}

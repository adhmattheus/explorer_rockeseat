import { Container } from "./styles";

interface TextareaProps {
  value: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({ placeholder, value, onChange }: TextareaProps) {
  return (
    <Container>
      <textarea
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
      />
    </Container>
  );
}

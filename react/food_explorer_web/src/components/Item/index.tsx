import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

interface ItemProps {
  isNew: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export default function Item({
  isNew,
  value,
  placeholder,
  onChange,
  onClick,
}: ItemProps) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <span onClick={onClick}>{value}</span>
      )}
      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

interface NoteItemProps {
  $isnew: boolean;
  value?: string;
  placeholder?: string;
  onClick?: () => void;
}

export function NoteItem({ $isnew, value, onClick, ...rest }: NoteItemProps) {
  return (
    <Container $isnew={$isnew}>
      <input type="text" value={value} readOnly={!$isnew} {...rest} />
      <button
        onClick={onClick}
        type="button"
        className={$isnew ? "button-add" : "button-delete"}
      >
        {$isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

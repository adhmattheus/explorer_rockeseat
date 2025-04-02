import { useState } from "react";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { Button } from "../../components/Button";
import { Container, NumberContainer, Order, Title } from "./styles";

interface FoodItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function FoodItem({ name, description, price, image }: FoodItemProps) {
  const [number, setNumber] = useState(1);
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <Container>
      <FiHeart size={"2.4rem"} />
      <img src={image} alt={`Imagem do ${name}`} />
      <Title>
        <h2>{name}</h2>
        <RxCaretRight />
      </Title>
      <p>{description}</p>
      <span>{price}</span>
      <Order>
        <NumberContainer>
          <button onClick={decrementNumber}>
            <FiMinus />
          </button>
          <span>{number < 10 ? `0${number}` : number}</span>
          <button onClick={incrementNumber}>
            <FiPlus />
          </button>
        </NumberContainer>
        <Button title="incluir" />
      </Order>
    </Container>
  );
}

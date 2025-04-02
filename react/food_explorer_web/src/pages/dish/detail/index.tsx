import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxCaretLeft } from "react-icons/rx";
import { Button } from "../../../components/Button";
import { ButtonText } from "../../../components/ButtonText";
import { NumberContainer } from "../../../components/FoodItem/styles";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { InputButton } from "../../../components/Header/styles";
import { Tag } from "../../../components/Tag";
import { Container, Content } from "./styles";

export function Detail() {
  const data = {
    id: 1,
    name: "Salada Caesar",
    description: "Salada fresca com alface, croutons e molho Caesar.",
    price: 10.2,
    image: "Mask group-1.png",
    ingredients: [
      { id: 1, name: "espinafre" },
      { id: 2, name: "alface" },
      { id: 3, name: "croutons" },
      { id: 4, name: "molho Caesar" },
    ],
  };

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
      <Header />

      <main>
        <div>
          <ButtonText>
            <RxCaretLeft />
            voltar
          </ButtonText>

          <Content>
            <img src={`../../../src/assets/${data.image}`} alt={data.name} />

            <div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              {data.ingredients && (
                <section>
                  {data.ingredients.map((ingredient) => (
                    <Tag key={String(ingredient.id)} title={ingredient.name} />
                  ))}
                </section>
              )}

              <div className="buttons">
                <NumberContainer>
                  <button onClick={decrementNumber}>
                    <FiMinus />
                  </button>
                  <span>{number < 10 ? `0${number}` : number}</span>
                  <button onClick={incrementNumber}>
                    <FiPlus />
                  </button>
                </NumberContainer>
                <InputButton>
                  <Button
                    title={`incluir ∙ R$ ${(data.price * number).toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}`}
                  />
                </InputButton>
              </div>
            </div>
          </Content>
        </div>
      </main>

      <Footer />
    </Container>
  );
}

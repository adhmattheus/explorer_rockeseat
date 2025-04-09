import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { ButtonText } from "../../../components/ButtonText";
import { NumberContainer } from "../../../components/FoodItem/styles";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { InputButton } from "../../../components/Header/styles";
import { Tag } from "../../../components/Tag";
import { Dish, DishesService } from "../../../services/dishesService";
import { Container, Content } from "./styles";

export function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<Dish | null>(null);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    async function fetchDish() {
      try {
        const dish = await DishesService.getDishById(Number(id));
        setData(dish);
      } catch (error) {
        console.error("Erro ao carregar prato:", error);
      }
    }
    fetchDish();
  }, [id]);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <main>
        <div>
          <ButtonText onClick={() => navigate("/home")}>
            <RxCaretLeft />
            voltar
          </ButtonText>

          <Content>
            <img src={`http://localhost:3333/files/${data.image}`} alt={data.name} />
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

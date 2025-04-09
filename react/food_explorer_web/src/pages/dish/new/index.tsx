import { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { ButtonText } from "../../../components/ButtonText";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import Item from "../../../components/Item";
import { Section } from "../../../components/Section";
import { Textarea } from "../../../components/TextArea";
import { useDishes } from "../../../hooks/useDishes";
import { CreateDish, DishesService, Ingredient } from "../../../services/dishesService";
import { Category, Container, Form, Image } from "./styles";

const ImageUpload = ({
  image,
  setImage,
}: {
  image: File | string | null;
  setImage: (file: File | null) => void;
}) => {
  const isImageUrl = typeof image === "string";

  return (
    <Section title="Imagem do prato">
      <Image className="image">
        <label htmlFor="image">
          <FiUpload size={"2.4rem"} />
          <span>{!image ? "Selecione imagem" : (image instanceof File ? image.name : "Imagem carregada")}</span>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
          />
        </label>
        {isImageUrl && (
          <img src={image} alt="Preview do prato" style={{ marginTop: "10px", maxHeight: "150px", objectFit: "contain" }} />
        )}
      </Image>
    </Section>
  );
};


const NameInput = ({ name, setName }: { name: string; setName: (name: string) => void }) => (
  <Section title="Nome">
    <Input
      className="name"
      placeholder="Ex.: Salada Ceasar"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </Section>
);

const CategorySelect = ({ category, setCategory }: { category: string; setCategory: (category: string) => void }) => (
  <Section title="Categoria">
    <Category className="category">
      <label htmlFor="category">
        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Selecionar</option>
          <option value="meal">Refeição</option>
          <option value="dessert">Sobremesa</option>
          <option value="beverage">Bebida</option>
        </select>
        <RiArrowDownSLine size={"2.4rem"} />
      </label>
    </Category>
  </Section>
);

interface NewDish {
  tags: string[];
  price: string;
  description: string;
  image?: File | null;
  name: string;
  category: string;
}

export function NewDish() {
  const { id } = useParams<{ id: string }>();
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const { createDish, creating } = useDishes();
  const [image, setImage] = useState<File | string | null>(null);

async function convertImageUrlToFile(url: string, fileName: string): Promise<File> {
  const response = await fetch(url);
  const blob = await response.blob();
  const mimeType = blob.type || "image/jpeg"; // ou image/png dependendo do seu caso
  return new File([blob], fileName, { type: mimeType });
}

  useEffect(() => {
    async function fetchDishById() {
      const BASE_URL = "http://localhost:3333"
      if (id) {
        try {
          const dish = await DishesService.getDishById(Number(id));
          setName(dish.name);
          setDescription(dish.description);
          setCategory(dish.category);
          setPrice(dish.price.toString());
          setTags(dish.ingredients?.map((ingredient: Ingredient) => ingredient.name) || []);
          if (dish.image) {
            const file = await convertImageUrlToFile(`${BASE_URL}/files/${dish.image}`, dish.image);
            setImage(file);
          }
        } catch (error) {
          console.error("Erro ao carregar prato:", error);
        }
      }
    }
    fetchDishById();
  }, [id]);
  

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!image || typeof image === "string") {
      alert("Selecione uma imagem válida.");
      return;
    }
  
    const dishData: CreateDish = {
      name,
      description,
      category,
      price: Number(price),
      ingredients: tags,
      image,
    };
  
    try {
      if (id) {
        await DishesService.updateDish(Number(id), dishData);
        alert("Prato atualizado com sucesso!");
      } else {
        await createDish(dishData);
        alert("Prato criado com sucesso!");
      }
      navigate("/home");
    } catch (e) {
      alert("Erro ao salvar prato.");
    }
  };
  

  return (
    <>
      <Header />
      <Container>
        <main>
          <Form onSubmit={handleSubmit}>
            <header>
              <ButtonText onClick={handleBack}>
                <RxCaretLeft />
                voltar
              </ButtonText>
              <h1>Adicionar prato</h1>
            </header>
            <div>
              <ImageUpload image={image} setImage={setImage} />
              <NameInput name={name} setName={setName} />
              <CategorySelect category={category} setCategory={setCategory} />
            </div>
            <div>
              <Section title="Ingredientes">
                <div className="tags">
                  {tags.map((tag, index) => (
                    <Item
                      isNew={false}
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))}
                  <Item
                    isNew={true}
                    placeholder="Adicionar"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewTag(e.target.value)
                    }
                    value={newTag}
                    onClick={handleAddTag}
                  />
                </div>
              </Section>
              <Section title="Preço">
                <Input
                  className="price"
                  placeholder="R$ 00,00"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Section>
            </div>
            <Section title="Descrição">
              <Textarea
                value={description}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Section>

            <div className="save">
              <Button
                title="Confirmar"
                type="submit"
                loading={creating}
              />
            </div>
          </Form>
        </main>
        <Footer />
      </Container>
    </>
  );
}

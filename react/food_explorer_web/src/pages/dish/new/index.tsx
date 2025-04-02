/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { ButtonText } from "../../../components/ButtonText";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import Item from "../../../components/Item";
import { Section } from "../../../components/Section";
import { Textarea } from "../../../components/TextArea";
import { Category, Container, Form, Image } from "./styles";

const ImageUpload = () => (
  <Section title="Imagem do prato">
    <Image className="image">
      <label htmlFor="image">
        <FiUpload size={"2.4rem"} />
        <span>{"Selecione imagem"}</span>
        <input id="image" type="file" />
      </label>
    </Image>
  </Section>
);

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
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newDish: NewDish = {
      tags,
      price,
      description,
      name,
      category,
    };
    console.log(newDish);
  }

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
              <ImageUpload />
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
                title="Salvar alterações"
                type="submit"
                loading={loading}
              />
            </div>
          </Form>
        </main>
        <Footer />
      </Container>
    </>
  );
}

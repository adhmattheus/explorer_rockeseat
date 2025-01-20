import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiPlus } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" $isactive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" $isactive />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Notas recentes">
          <Note
            data={{
              title: "Aprendendo React Native",
              tags: [
                { id: 1, name: "React" },
                { id: 2, name: "React Native" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}

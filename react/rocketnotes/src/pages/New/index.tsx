import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textearea";
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";

export function NewNote() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Title" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem $isnew placeholder="Novo link" />
            <NoteItem placeholder="Ok" $isnew={false} />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" $isnew={false} />
              <NoteItem $isnew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}

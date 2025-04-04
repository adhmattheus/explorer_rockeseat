import { Container } from "./styles";
import { Tag } from "../Tag";

interface NoteProps {
  data: {
    title: string;
    tags?: { id: number; name: string }[];
  };
}

export function Note({ data, ...rest }: NoteProps) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag title={tag.name} key={tag.id} />
          ))}
        </footer>
      )}
    </Container>
  );
}

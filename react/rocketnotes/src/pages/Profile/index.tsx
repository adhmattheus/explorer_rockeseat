import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
export function Profile() {
  return (
    <Container>
      <header>
        <button type="button">
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/adhmattheus.png" alt="User Image" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha Atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Atualizar" />
      </Form>
    </Container>
  );
}

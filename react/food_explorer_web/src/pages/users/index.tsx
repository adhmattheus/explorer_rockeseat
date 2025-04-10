import { useEffect, useState } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { User, UsersService } from "../../services/usersService";
import { Container, UserItem, UserList } from "./styles";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await UsersService.getUsers();
        setUsers(data);
      } catch (err) {
        setError("Erro ao carregar usuários.");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <ButtonText onClick={() => navigate("/home")}>
          <RxCaretLeft />
          voltar
        </ButtonText>
        <h1>Lista de Usuários</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <UserList>
            {users.map((user) => (
              <UserItem key={user.id}>
                <p>
                  <strong>Nome:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Admin:</strong> {user.is_admin ? "Sim" : "Não"}
                </p>
              </UserItem>
            ))}
          </UserList>
        )}
      </main>
      <Footer />
    </Container>
  );
}

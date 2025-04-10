import { useEffect, useState } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { Order, OrdersService } from "../../services/ordersService";
import { Container, OrderItem, OrderList } from "./styles";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await OrdersService.getOrders();
        setOrders(data);
      } catch (err) {
        setError("Erro ao carregar pedidos.");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <ButtonText onClick={() => navigate("/home")}>
          <RxCaretLeft />
          voltar
        </ButtonText>
        <h1>{user?.is_admin ? "Todos os Pedidos" : "Meus Pedidos"}</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : orders.length === 0 ? (
          <h2 style={{ textAlign: "center", marginTop: "2rem", color: "#fff" }}>
            Sem pedidos
          </h2>
        ) : (
          <OrderList>
            {orders.map((order) => (
              <OrderItem key={order.id}>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p>
                  <strong>Preço:</strong> R$ {order.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
                <p>
                  <strong>Método de Pagamento:</strong> {order.payment_method}
                </p>

                {user?.is_admin ? (
                  <p>
                    <strong>Criado por:</strong> {order.created_by}
                  </p>
                ) : null}
                <p>
                  <br />
                  <strong>Itens:</strong>
                </p>
                <ul>
                  {order.dishes.map((item, index) => (
                    <li key={index}>
                      <strong>Nome:</strong> {item.name}, <br>
                      </br><strong>Quantidade:</strong> {item.quantity}
                    </li>
                  ))}
                </ul>
              </OrderItem>
            ))}
          </OrderList>
        )}
      </main>
      <Footer />
    </Container>
  );
}

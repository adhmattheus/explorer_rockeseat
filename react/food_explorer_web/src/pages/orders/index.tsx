import { useEffect, useState } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Order, OrdersService } from "../../services/ordersService";
import { BackButton, Container, OrderItem, OrderList } from "./styles";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header />
      <main>
        <BackButton onClick={handleBack}>
          <RxCaretLeft size="2rem" />
          voltar
        </BackButton>
        <h1>Lista de Pedidos</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
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
                <p>
                  <strong>Itens:</strong>
                </p>
                <ul>
                  {order.order_items.map((item, index) => (
                    <li key={index}>
                      <strong>Dish ID:</strong> {item.dish_id}, <strong>Quantidade:</strong> {item.quantity}
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

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Content } from "./styles";
export default function Home() {
  return (
    <div>
      <Header />

      <Content>
        <img src="../../../src/assets/home.png" alt="" />
        <div>
          <span>Sabores inigualáveis</span>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Content>

      <Footer />
    </div>
  );
}

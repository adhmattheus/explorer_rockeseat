import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FoodItem } from "../../components/FoodItem";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { useDishes } from "../../hooks/useDishes";
import { Content, SwipperContainer } from "./styles";

export default function Home() {
  const { dishes, loading, error } = useDishes();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDishClick = (id: number) => {
    console.log("Clicou em:", id);
    if (user?.is_admin) {
      navigate(`/new/${id}`);
    } else {
      navigate(`/detail/${id}`);
    }
  };
  

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

      <SwipperContainer>
        <span>Refeições</span>

        {loading ? (
          <p>Carregando pratos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination]}
          >
            {dishes
              .filter((dish) => dish.category === "meal")
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <FoodItem
                    name={item.name}
                    description={item.description}
                    price={`R$ ${item.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}`}
                    image={item.image}
                    buttonText={!user?.is_admin ? "Incluir" : "Editar prato"}
                    onClick={() => handleDishClick(item.id!)}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}

        <span>Sobremesas</span>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
        >
          {dishes
            .filter((dish) => dish.category === "dessert")
            .map((item) => (
              <SwiperSlide key={item.id}>
                <FoodItem
                  name={item.name}
                  description={item.description}
                  price={`R$ ${item.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}`}
                  image={item.image}
                  buttonText={!user?.is_admin ? "Incluir" : "Editar prato"}
                  onClick={() => handleDishClick(item.id!)}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <span>Bebidas</span>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
        >
          {dishes
            .filter((dish) => dish.category === "beverage")
            .map((item) => (
              <SwiperSlide key={item.id}>
                <FoodItem
                  name={item.name}
                  description={item.description}
                  price={`R$ ${item.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}`}
                  image={item.image}
                  buttonText={!user?.is_admin ? "Incluir" : "Editar prato"}
                  onClick={() => handleDishClick(item.id!)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SwipperContainer>

      <Footer />
    </div>
  );
}

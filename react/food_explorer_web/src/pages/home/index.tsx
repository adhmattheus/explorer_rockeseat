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
    navigate(`/detail/${id}`);
  };

  const handleEditClick = (id: number) => {
    navigate(`/new/${id}`);
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
            loop={dishes.filter((dish) => dish.category === "meal").length > 3}
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
                    id={item.id!}
                    name={item.name}
                    description={item.description}
                    price={`R$ ${item.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}`}
                    image={item.image}
                    isAdmin={!!user?.is_admin}
                    onEditClick={handleEditClick}
                    onViewClick={handleDishClick}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}

        <span>Sobremesas</span>
        <Swiper
          loop={dishes.filter((dish) => dish.category === "dessert").length > 3}
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
                  id={item.id!}
                  name={item.name}
                  description={item.description}
                  price={`R$ ${item.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}`}
                  image={item.image}
                  isAdmin={!!user?.is_admin}
                  onEditClick={handleEditClick}
                  onViewClick={handleDishClick}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <span>Bebidas</span>
        <Swiper
          loop={dishes.filter((dish) => dish.category === "beverage").length > 3}
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
                  id={item.id!}
                  name={item.name}
                  description={item.description}
                  price={`R$ ${item.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}`}
                  image={item.image}
                  isAdmin={!!user?.is_admin}
                  onEditClick={handleEditClick}
                  onViewClick={handleDishClick}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SwipperContainer>

      <Footer />
    </div>
  );
}

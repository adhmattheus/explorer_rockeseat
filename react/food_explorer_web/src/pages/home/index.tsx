import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FoodItem } from "../../components/FoodItem";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useDishes } from "../../hooks/useDishes";
import { Content, SwipperContainer } from "./styles";

export default function Home() {
  const { dishes, loading, error } = useDishes();

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
            slidesPerView={4}
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
                    price={item.price.toString()}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}

        <span>Sobremesas</span>
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
        >
          {dishes
            .filter((dish) => dish.category === "desserts")
            .map((item) => (
              <SwiperSlide key={item.id}>
                <FoodItem
                  name={item.name}
                  description={item.description}
                  price={item.price.toString()}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <span>Bebidas</span>
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination]}
        >
          {dishes
            .filter((dish) => dish.category === "drinks")
            .map((item) => (
              <SwiperSlide key={item.id}>
                <FoodItem
                  name={item.name}
                  description={item.description}
                  price={item.price.toString()}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </SwipperContainer>

      <Footer />
    </div>
  );
}

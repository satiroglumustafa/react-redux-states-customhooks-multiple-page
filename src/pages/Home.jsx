import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Badge, Spinner } from "react-bootstrap";
import { useContext } from "react";
import ApiContext from "../contexts/ApiContext";
import "./MainSlide.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils";

const Home = () => {

  

  const { categoryList, loading } = useContext(ApiContext);
  const filteredForCategory = categoryList.filter(
    (item) => item.category === "jewelery"
  );

 

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {filteredForCategory.map((swiperItem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="main-slide">
                <figure className="slide-figure">
                  <picture className="d-flex">
                    <img src={swiperItem.image} alt="" />
                  </picture>
                  <figcaption>
                    <h3 className="slide-title">{swiperItem.title}</h3>
                    <p className="slide-desc">{swiperItem.description}</p>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <Badge bg="success">Fiyat: {swiperItem.price} TL </Badge>
                      <Link to={`/category/${slugify(swiperItem.category)}/${slugify(swiperItem.title)}`}
  className="slide-detail-btn" prefetch="intent">Detay</Link>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Home;

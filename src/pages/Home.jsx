import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Badge, Card, Spinner } from "react-bootstrap";
import { useContext, useMemo } from "react";
import ApiContext from "../contexts/ApiContext";
import "./MainSlide.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils";
import './TopScorersSlide.css'
const Home = () => {
  const { categoryList, loading } = useContext(ApiContext);
  const filteredForCategory = useMemo(()=>{
    return categoryList.filter(
      (item) => item.category === "jewelery"
    );
  },[categoryList])

  const filteredTopScorers = useMemo(()=>{
   return  categoryList.filter(
    (item) => item.rating && item.rating.rate > 4
  );
  },[categoryList])

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
        className="mb-5"
      >
        {filteredForCategory.map((swiperItem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="main-slide">
                <figure className="slide-figure">
                  <Link
                    to={`/category/${slugify(swiperItem.category)}/${slugify(
                      swiperItem.title
                    )}`}
                    prefetch="intent"
                  >
                    <picture className="d-flex">
                      <img src={swiperItem.image} alt="" />
                    </picture>
                  </Link>
                  <figcaption>
                    <h3 className="slide-title">{swiperItem.title}</h3>
                    <p className="slide-desc">{swiperItem.description}</p>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <Badge bg="success">Fiyat: {swiperItem.price} TL </Badge>
                      <Link
                        to={`/category/${slugify(
                          swiperItem.category
                        )}/${slugify(swiperItem.title)}`}
                        className="slide-detail-btn"
                        prefetch="intent"
                      >
                        Detay
                      </Link>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="top-scorers-area mb-5">
        <h2 className="sub-title">En Çok Beğenilenler</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1, // mobil
            },
            768: {
              slidesPerView: 2, // tablet
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }
        }
        >
          {filteredTopScorers.map((scoreItem, index) => {
            return (
              <SwiperSlide key={index}>
                <Card>
                <Link
                    to={`/category/${slugify(scoreItem.category)}/${slugify(
                      scoreItem.title
                    )}`}>
                      <Card.Img variant="top" src={scoreItem.image} />
                  </Link>
                  
                  <Card.Body>
                    <Card.Title> 
                      <Link
                      to={`/category/${slugify(scoreItem.category)}/${slugify(
                        scoreItem.title
                      )}`}>
                          {scoreItem.title}
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      <Link
                        to={`/category/${slugify(scoreItem.category)}/${slugify(
                          scoreItem.title
                        )}`}>
                          {scoreItem.description}
                      </Link>
                    </Card.Text>
                    <Badge bg="success" className="point">
                      {scoreItem.rating.rate}
                    </Badge>
                    <Link
                        to={`/category/${slugify(
                          scoreItem.category
                        )}/${slugify(scoreItem.title)}`}
                        className="slide-detail-btn"
                        prefetch="intent"
                      >
                        Detay
                      </Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import { useContext } from "react";
import ApiContext from "../contexts/ApiContext";
import { slugify } from "../utils/utils";
import { Badge, Col, Spinner } from "react-bootstrap";
import "./CategoryDetail.css";
import { useSelector } from "react-redux";
const CategoryDetail = () => {
  const { category, id } = useParams();
  const { categoryList } = useContext(ApiContext);

  const themeMode = useSelector((state)=>state.themeMode.isDark) //redux çekimi

  const matchedItem = categoryList.find(
    (item) => slugify(item.category) === category && slugify(item.title) === id
  );

  console.log(matchedItem);

  if (!matchedItem)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Yükleniyor...</span>
      </Spinner>
    );

  return (
    <Col xs={12}>
      <div className="category-detail">
        <h2>{matchedItem.title}</h2>
        <img src={matchedItem.image} alt="" />
        <p>{matchedItem.description}</p>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <Badge bg={themeMode ? "warning" : "secondary"}><strong>Fiyat:</strong> {matchedItem.price} TL</Badge>
          <Badge bg={themeMode ? "warning" : "secondary"}><strong>Puanı:</strong> {matchedItem.rating.rate}</Badge>
        </div>
      </div>
    </Col>
  );
};

export default CategoryDetail;

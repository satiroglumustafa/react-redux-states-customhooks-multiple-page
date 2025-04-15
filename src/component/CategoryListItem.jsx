import { Card, Col } from "react-bootstrap";
import './CategoryListItem.css'
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils";
const CategoryListItem = (props) => {
  return (
    <>
      <Col xs={12} md={6} lg={3} className="mb-4">
        <Card  className="card-area">
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <Link to={`/category/${slugify(props.category)}/${slugify(props.title)}`}
  className="slide-detail-btn" prefetch="intent">Detay</Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CategoryListItem;

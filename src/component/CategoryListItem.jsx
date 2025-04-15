import { Card, Col } from "react-bootstrap";
import './CategoryListItem.css'
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils";
const CategoryListItem = (props) => {
  return (
    <>
      <Col xs={12} md={6} lg={3} className="mb-4">
        <Card  className="card-area">
          <Link to={`/category/${slugify(props.category)}/${slugify(props.title)}`}>
            <Card.Img variant="top" src={props.image} />
          </Link>
          <Card.Body>
            <Card.Title>
              <Link to={`/category/${slugify(props.category)}/${slugify(props.title)}`}> {props.title}</Link>
            </Card.Title>
            <Card.Text>
              <Link to={`/category/${slugify(props.category)}/${slugify(props.title)}`}>{props.description}</Link>
            </Card.Text>
            <Link to={`/category/${slugify(props.category)}/${slugify(props.title)}`}className="slide-detail-btn" prefetch="intent">Detay</Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CategoryListItem;

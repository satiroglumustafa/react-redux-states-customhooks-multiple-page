import { Col, Spinner } from "react-bootstrap";
import CategoryList from "../component/CategoryList";
import { useContext } from "react";
import ApiContext from "../contexts/ApiContext";

const Category = () => {
  
 const {categoryList,loading} = useContext(ApiContext)

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <Col xs={12}>
        <div className="page-title">
          <h1>Kategoriler</h1>
        </div>
      </Col>
      <CategoryList categoryList={categoryList} />
    </>
  );
};

export default Category;

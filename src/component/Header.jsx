import { Link } from "react-router-dom";
import "./Header.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeModeSlice";
import { useEffect } from "react";
const Header = () => {

  const  themeModeParam = useSelector((state)=>state.themeMode.isDark)
  const dispatch = useDispatch()

  const handleToggleTheme = ()=>{
    dispatch(toggleTheme())
  }

  useEffect(()=>{
    if (themeModeParam) {
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }
  },[themeModeParam])

  return (
    <div  className="header">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-flex align-items-center justify-content-center position-relative">
              <ul className="d-flex align-items-center">
                <li>
                  <Link to="/">Anasayfa</Link>
                </li>
                <li>
                  <Link to="/hakkimizda">Hakkımızda</Link>
                </li>
                <li>
                  <Link to="/kategori">Kategori</Link>
                </li>
              </ul>
              <Form className="themeMode">
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label={`${themeModeParam ? "Dark "  : " Light" }  `}
                  onClick={handleToggleTheme}
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;

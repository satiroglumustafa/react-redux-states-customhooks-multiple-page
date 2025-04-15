import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import {
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeModeSlice";
import { useEffect, useState } from "react";

const Header = () => {
  const themeModeParam = useSelector((state) => state.themeMode.isDark);
  const dispatch = useDispatch();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // navbar toggle state

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  // Sayfa geçişinde menüyü kapat
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  useEffect(() => {
    if (themeModeParam) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeModeParam]);

  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-flex align-items-center justify-content-center position-relative">
              <Navbar expand="lg" expanded={expanded}>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto gap-3">
                    <Link to="/" onClick={() => setExpanded(false)}>Anasayfa</Link>
                    <Link to="/hakkimizda" onClick={() => setExpanded(false)}>Hakkımızda</Link>
                    <Link to="/kategori" onClick={() => setExpanded(false)}>Kategori</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Form className="themeMode">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={`${themeModeParam ? "Dark " : " Light"}  `}
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

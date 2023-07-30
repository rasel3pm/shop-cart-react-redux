import { Container, Nav, Navbar } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const getValue = useSelector((state) => state.cart.value);
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand>
          <Nav.Link to="/" as={Link}>
            <img src={logo} width={100} alt="logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav.Link to="/cart" as={Link}>
            <CiShoppingCart className="fs-3" />
            <span className="text-danger fw-bold">{getValue.length}</span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

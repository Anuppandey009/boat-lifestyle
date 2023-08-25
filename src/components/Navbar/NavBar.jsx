import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import logo from "../../assets/images/1200px-Boat_Logo.webp.png";
import Button from "react-bootstrap/Button";
export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        {/* <div className="pre-navbar">
          <p>
            Get legendary sound at a legendary price. <b>Airpods 131 </b> is now
            at <b>₹999</b>. Shop Now!{" "}
          </p>
        </div> */}
      </div>

      <div className="parent-container">
        <div className="mainNavbar">
          <div className="navLogo">
            <img className="logo" src={logo} alt="" />
          </div>
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#home">Daily Deals</Nav.Link>
                  <Nav.Link href="#link">Gift WIth boAt</Nav.Link>
                  <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="search-cart-login">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Nav.Link href="#link">
            <FontAwesomeIcon icon={faUser} />
          </Nav.Link>
          <Nav.Link href="#link">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
        </div>
      </div>
    </>
  );
};

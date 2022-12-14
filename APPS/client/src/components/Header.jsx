import Container from "react-bootstrap/Container"; // container from bootstrap for ui
import Nav from "react-bootstrap/Nav"; // for making nav inside the navbar
import Navbar from "react-bootstrap/Navbar"; // navbar for header from bootstrap
import logo1 from "../images/logo1.png"; // importing logo
import { Link, useLocation } from "react-router-dom"; // getting link to redirect on link

const Header = ({ user }) => {
  const location = useLocation(); // to get current page location

  // rendering ui
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={location.pathname === "/" ? "homeheader" : "header"}
      style={{ zIndex: 1000 }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo1} style={{ height: "70px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/articles">
              Articles
            </Nav.Link>

            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>

            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>

          {/* if user is logged in then show profile page link if not show login and signup link */}
          {user && user._id ? (
            <>
              <Nav.Link as={Link} to="/profile">
                <i className="fa fa-user" style={{ fontSize: 22 }}></i>
                &nbsp;&nbsp;
                {user.name}
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link as={Link} to="/signin">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

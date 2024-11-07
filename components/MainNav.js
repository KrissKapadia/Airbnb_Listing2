import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

function NavigationBar() {
  return (
    <>
      <Navbar fixed="top" className="navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>Kriss Kapadia</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Listings</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

export default NavigationBar;

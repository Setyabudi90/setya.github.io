import { Navbar, Container, Nav } from "react-bootstrap"
import '../LandingPage.css';

const Navigation = () => {
    return (
        <Navbar bg="transparent" className="bg fixed" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-white nama">SBFILMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-theme="auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#link" className="text-white">Beranda</Nav.Link>
              <Nav.Link href="#home" className="text-white">Trending</Nav.Link>
              <Nav.Link href="#home" className="text-white">Hots</Nav.Link>
              <Nav.Link href="#home" className="text-white">Informasi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation
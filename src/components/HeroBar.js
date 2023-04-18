import { Row, Container, Col, Button } from "react-bootstrap"
import './Hero.css';


const Hero = () => {
    return (
    <div className="text-center tulisan">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-white">Nonton Gratis Tanpa Iklan</h1>
          <p className="col-md-7 text-center ms-auto me-auto text">          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          </p>
          </Col>
        </Row>
      </Container>
      <Button variant="secondary" className="b" href="https://instagram.com/i.setya_b" size="md">Lihat Semua Films</Button>
    </div>
    )
}

export default Hero 
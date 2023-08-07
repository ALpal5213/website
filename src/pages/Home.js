import { AppContext } from '../App.js'
import { useState, useEffect }  from 'react'
import { Container, Col, Row, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  RedDividerVertical,
  RedDividerHorizontal, 
} from '../styles/styled-components.js'
import { NavbarSmallScreen, NavbarLargeScreen } from '../components/Navbar.js';
import { DesktopWelcome, MobileWelcome } from '../components/WelcomeText.js';
import { MainCarouselMobile, MainCarouselDesktop } from '../components/Carousels.js';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 768 ? false : true);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 768 ? setIsDesktop(false) : setIsDesktop(true);
    }
    window.addEventListener('resize', handleResize);
  })

  return (
    <Container fluid style={{ color: 'white' }}>
      <Row>
        {isDesktop && <Col md={1}><NavbarLargeScreen/></Col>}
        <Col xs={12} md={3}>
          {isDesktop && <DesktopWelcome/>}
          {!isDesktop && <MobileWelcome/>}
        </Col>
        <Col xs={12} md={8} style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {isDesktop && <MainCarouselDesktop/>}
          {!isDesktop && <MainCarouselMobile/>}
        </Col>
      </Row>   
      {!isDesktop &&<Row><NavbarSmallScreen/></Row>}
      {/* Add row with state. If career is selected, state is career */}
      <Row></Row>
    </Container>
  );
}

export default Home;
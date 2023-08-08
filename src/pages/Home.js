import { AppContext } from '../App.js'
import { useState, useEffect, useContext }  from 'react'
import { Container, Col, Row, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  RedDividerVertical,
  RedDividerHorizontal, 
} from '../styles/styled-components.js'
import { NavbarSmallScreen, NavbarLargeScreen } from '../components/Navbar.js';
import { DesktopWelcome, MobileWelcome } from '../components/WelcomeText.js';
import { MainCarouselMobile, MainCarouselDesktop } from '../components/Carousels.js';
import { CareerMobile } from '../components/Career.js';
import { EducationMobile } from '../components/Education.js';

const Home = () => {
  const {selectedView, setSelectedView} = useContext(AppContext);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 992 ? false : true);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 992 ? setIsDesktop(false) : setIsDesktop(true);
    }
    window.addEventListener('resize', handleResize);
  })

  return (
    <Container fluid style={{ 
      color: 'white',
      // position: 'relative'
      }}>
      <Row>
        {isDesktop && <Col md={1}><NavbarLargeScreen/></Col>}
        <Col xs={12} lg={3}>
          {isDesktop && <DesktopWelcome/>}
          {!isDesktop && <MobileWelcome/>}
        </Col>
        <Col xs={12} lg={8} style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {isDesktop && <MainCarouselDesktop/>}
          {!isDesktop && <MainCarouselMobile/>}
        </Col>
      </Row>   
      {!isDesktop &&<Row><NavbarSmallScreen/></Row>}
      {selectedView != 'none' && !isDesktop && <Row>
        {selectedView == 'career' && <CareerMobile/>}
        {selectedView == 'education' && <EducationMobile/>}
        {selectedView == 'contact' && <CareerMobile/>}
      </Row>}
      {selectedView != 'none' && isDesktop && <Row id="top-content">
        {selectedView == 'career' && <CareerMobile/>}
        {selectedView == 'education' && <EducationMobile/>}
        {selectedView == 'contact' && <CareerMobile/>}
      </Row>}
    </Container>
  );
}

export default Home;
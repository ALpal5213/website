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
import { CareerMobile, CareerDesktop } from '../components/Career.js';
import { EducationMobile, EducationDesktop } from '../components/Education.js';
import { SkillsMobile, SkillsDesktop } from '../components/Skills.js';
import { Contact } from '../components/Contact.js';

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
    <div>
      {isDesktop && <MainCarouselDesktop/>}
      {!isDesktop && <MainCarouselMobile/>}
      <Container fluid style={{ color: 'white' }} id="top-page">
        <Row style={{height: '100vh'}}>
          {isDesktop && <>
            <Col md={1}></Col>
            <Col md={1} style={{position: 'fixed'}}><NavbarLargeScreen/></Col>
            {/* <Col md={1}><NavbarLargeScreen/></Col> */}
          </>}
          <Col xs={12} lg={3}>
            {isDesktop && <DesktopWelcome/>}
            {!isDesktop && <MobileWelcome/>}
          </Col>
        </Row>   
        {!isDesktop &&<Row><NavbarSmallScreen/></Row>}
        {selectedView != 'none' && !isDesktop && <Row>
          {selectedView == 'career' && <CareerMobile/>}
          {selectedView == 'education' && <EducationMobile/>}
          {selectedView == 'skills' && <SkillsMobile/>}
        </Row>}
        {selectedView != 'none' && isDesktop && <Row id="top-content">
          {selectedView == 'career' && <CareerDesktop/>}
          {selectedView == 'education' && <EducationDesktop/>}
          {selectedView == 'skills' && <SkillsDesktop/>}
        </Row>}
      </Container>
    </div>
  );
}

export default Home;
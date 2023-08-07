import { Container, Col, Row } from 'react-bootstrap'
import { useContext }  from 'react'
import { AppContext } from '../App.js'
import { 
  RedDividerVertical,
  RedDividerHorizontal, 
  BriefcaseIconSmall,
  BriefcaseIconLarge, 
  EducationIconSmall,
  EducationIconLarge,
  ContactIconSmall,
  ContactIconLarge, 
} from '../styles/styled-components.js'

export const NavbarSmallScreen = () => {
  const {selectedView, setSelectedView} = useContext(AppContext);

  const handleClickScroll = () => {
    const element = document.getElementById('scroll-here');
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
      
  };

  return (
    <Container fluid style={{
      color: 'white',
      textAlign: 'center',
      position: 'absolute',
      bottom: '10px'
    }}>
      <Row id="top-navbar">
        <RedDividerHorizontal />
      </Row>
      <Row>
        <Col xs={4} onClick={() => {
          selectedView === 'career' ? setSelectedView('none') : setSelectedView('career');
          handleClickScroll();
        }}>{
          <div className='menu-icon-mobile'>
            <BriefcaseIconSmall />
            <div>Career</div>
          </div>
        }</Col>
        <Col xs={4} onClick={() => {
          selectedView === 'education' ? setSelectedView('none') : setSelectedView('education');
          handleClickScroll();
        }}>{
          <div className='menu-icon-mobile'>
            <EducationIconSmall />
            <div>Education</div>
          </div>
        }</Col>
        <Col xs={4} onClick={() => {
          selectedView === 'contact' ? setSelectedView('none') : setSelectedView('contact');
          handleClickScroll();
        }}>{
          <div className='menu-icon-mobile'>
            <ContactIconSmall />
            <div>Contact Me</div>
          </div>
        }</Col>
      </Row>
    </Container>
  );
}

export const NavbarLargeScreen = () => {
  return (
    <Container fluid style={{
      color: 'white',
      textAlign: 'center',
    }}>
      <Row style={{
        height: '30vh'
      }}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <RedDividerVertical />
        </Col>
      </Row>
      <Row style={{
        height: '40vh',
        padding: '40px 0 40px 0'
      }}>
        <Col xs={12}>{
          <div className='menu-icon-desktop'>
            <BriefcaseIconLarge />
            <div>Career</div>
          </div>
        }</Col>
        <Col xs={12}>{
          <div className='menu-icon-desktop'>
            <EducationIconLarge />
            <div>Education</div>
          </div>
        }</Col>
        <Col xs={12}>{
          <div className='menu-icon-desktop'>
            <ContactIconLarge />
            <div>Contact Me</div>
          </div>
        }</Col>
      </Row>
      <Row style={{
        height: '30vh'
      }}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <RedDividerVertical />
        </Col>
      </Row>
    </Container>
  );
}
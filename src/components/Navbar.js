import { Container, Col, Row } from 'react-bootstrap'
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
  return (
    <Container fluid style={{
      color: 'white',
      textAlign: 'center',
      position: 'absolute',
      bottom: '0px'
    }}>
      <Row>
        <RedDividerHorizontal />
      </Row>
      <Row>
        <Col xs={4}>{
          <div className='menu-icon-mobile'>
            <BriefcaseIconSmall />
            <div>Career</div>
          </div>
        }</Col>
        <Col xs={4}>{
          <div className='menu-icon-mobile'>
            <EducationIconSmall />
            <div>Education</div>
          </div>
        }</Col>
        <Col xs={4}>{
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
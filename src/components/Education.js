import { Container, Col, Row } from 'react-bootstrap'
import { UWCarousel, UNMCarousel } from '../components/Carousels.js';


export const EducationMobile = () => {
  return (
    <Container fluid style={{
      marginTop: '80vh'
    }}>
      <Row style={{marginBottom: '10%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <UNMCarousel/>
        </Col>
      </Row>
      <Row style={{marginBottom: '10%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <UWCarousel/>
        </Col>
      </Row>
      {/* <Row style={{marginBottom: '10%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <UWCarousel/>
        </Col>
      </Row> */}
      {/* <Row style={{marginBottom: '900px'}}>UNM</Row> */}
    </Container>
  );
};
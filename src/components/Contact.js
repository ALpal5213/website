import { Container, Col, Row } from 'react-bootstrap'

export const Contact = () => {
  return (
    <Container fluid style={{
      marginTop: '80vh'
    }}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <h3>Contact Me</h3>
        </Col>
      </Row>
      <Row style={{textAlign: 'center', marginBottom: '10%'}}>
        <Col>
          Use the form below to contact me.
        </Col>
      </Row>
    </Container>
  );
};
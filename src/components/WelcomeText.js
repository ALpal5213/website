import { Container, Col, Row } from 'react-bootstrap';
import { TypeAnimation} from 'react-type-animation';

export const DesktopWelcome = () => {
  return (
    <Container fluid style={{
      position: 'relative',
      top: '35%',
      textAlign: 'center'
    }}>
      <Row style={{
        fontSize: '7vh',
      }}>
        <Col>Welcome!</Col>
      </Row>
      <Row style={{
        fontSize: '3vh',
      }}>
        <TypeAnimation
          sequence={[
            "I'm Adrian Lewis"
          ]}
          wrapper='span'
          speed={{type: 'keyStrokeDelayInMs', value: 150}}
          style={{ whiteSpace: 'pre-line' }}
          cursor={false}
        />
      </Row>
    </Container>
  );
}

export const MobileWelcome = () => {
  return (
    <Container fluid style={{
      position: 'relative',
      top: '10%',
      textAlign: 'center',
      marginBottom: '15%'
    }}>
      <Row style={{
        fontSize: '6vh',
      }}>
        <Col>Welcome!</Col>
      </Row>
      <Row style={{
        fontSize: '3vh',
      }}>
        <TypeAnimation
          sequence={[
            "I'm Adrian Lewis"
          ]}
          wrapper='span'
          speed={{type: 'keyStrokeDelayInMs', value: 150}}
          style={{ whiteSpace: 'pre-line' }}
          cursor={false}
        />
      </Row>
    </Container>
  );
}
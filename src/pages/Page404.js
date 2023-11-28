import { Container, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid style={{ color: 'white' }}>
        <Row style={{marginTop: '40vh'}}>
          <Col style={{textAlign: 'center'}}>
            <div className="text404">
              Wrong Way!
            </div>
          </Col>
        </Row>
        <Row style={{marginTop: '10vh'}}>
          <Col style={{textAlign: 'center'}}>
            <button className="button404" onClick={() => navigate('/')}>Back to Home</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page404;
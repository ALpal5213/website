import { Container, Col, Row } from 'react-bootstrap'
import { DevCarousel } from '../components/Carousels.js';
import { AppContext } from '../App.js'
import { useContext }  from 'react'
import { RedDividerVertical, RedDividerHorizontal } from '../styles/styled-components.js'

export const SkillsMobile = () => {
  const {selectedItem} = useContext(AppContext);

  return (
    <Container fluid style={{
      marginTop: '3vh',
      minHeight: '100vh'
    }}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <h3>Skills</h3>
        </Col>
      </Row>
      <Row style={{textAlign: 'center', marginBottom: '10%'}}>
        <Col>
          Through my career, my education, and my personal endeavors I have developed a diverse set of skills.
        </Col>
      </Row>
      <Row style={{marginBottom: '10%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedItem === 'dev' && <input id="dev-card" type="checkbox" className="radio"/>}
          <label className="flip-card" htmlFor="dev-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <DevCarousel/>
              </div>
              <div className="flip-card-back">
                <h6>Software Development</h6>
                <RedDividerVertical/>
                
                <div className="card-contents">
                  <p>Frontend</p>
                  <p>Backend</p>
                </div>
              </div>
            </div>
          </label>
        </Col>
      </Row>
      
    </Container>
  );
};

export const SkillsDesktop = () => {
  const {selectedItem} = useContext(AppContext);

  return (
    <Container fluid style={{
      marginTop: '5vh',
      minHeight: '100vh'
    }}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <h3>Skills</h3>
        </Col>
      </Row>
      <Row style={{textAlign: 'center', marginBottom: '1%'}}>
        <Col md={1}></Col>
        <Col>
          Through my career, my education, and my personal endeavors I have developed a diverse set of skills.
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row style={{marginBottom: '3%'}}>
        <Col md={1}></Col>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedItem === 'dev' && <input id="dev-card" type="checkbox" className="radio"/>}
          <label className="slider" htmlFor="dev-card">
            <DevCarousel/>
            <div className="slide-out">
              <h3>Software Development</h3>
              <RedDividerHorizontal/>
                
              <div>
                <p>Frontend</p>
                <p>Backend</p>
              </div>
            </div>
          </label>
        </Col>
        <Col md={1}></Col>
      </Row>
      
    </Container>
  );
};
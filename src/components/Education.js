import { Container, Col, Row } from 'react-bootstrap'
import { UWCarousel, UNMCarousel } from '../components/Carousels.js';
import { AppContext } from '../App.js'
import { useContext }  from 'react'
import { RedDividerVertical, RedDividerHorizontal} from '../styles/styled-components.js'

export const EducationMobile = () => {
  const {selectedItem} = useContext(AppContext);

  return (
    <Container fluid style={{
      marginTop: '80vh'
    }}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <h3>Education</h3>
        </Col>
      </Row>
      <Row style={{textAlign: 'center', marginBottom: '10%'}}>
        <Col>
          My education has played a huge role in making me who I am today as well as developing the skills I now possess. Select a card below to learn more about my educational background.
        </Col>
      </Row>
      <Row style={{marginBottom: '10%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedItem === 'unm' && <input id="unm-card" type="checkbox" className="radio"/>}
          <label className="flip-card" htmlFor="unm-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <UNMCarousel/>
              </div>
              <div className="flip-card-back">
                <h6>Computer Engineering</h6>
                <RedDividerVertical/>
                
                <div className="card-contents">
                  <p>Focus: Internet of Things</p>
                  <p>GPA: 4.0</p>
                  <p>Thesis: Coming Soon</p>
                </div>
              </div>
            </div>
          </label>
        </Col>
      </Row>
      <Row style={{marginBottom: '10%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedItem === 'uw' && <input id="uw-card" type="checkbox" className="radio"/>}
          <label className="flip-card" htmlFor="uw-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <UWCarousel/>
              </div>
              <div className="flip-card-back">
                <h6>Physics <br/>& <br/>Electrical Engineering</h6>
                <RedDividerVertical/>

                <div className="card-contents">
                  <p>Focus:</p>
                  <p style={{marginTop: '5px'}}>Physics: Comprehensive</p>
                  <p style={{marginTop: '5px'}}>EE: Embedded Computing Systems</p>
                  <p>GPA: 3.39</p>
                  <p>Extras:</p>
                  <ul>
                    <li>Air Force ROTC</li>
                    <li>UW Research <a href="https://arthurbarnard.com/">site</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export const EducationDesktop = () => {
  const {selectedItem} = useContext(AppContext);

  return (
    <Container fluid style={{
      marginTop: '0vh'
    }}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <h3>Education</h3>
        </Col>
      </Row>
      <Row style={{textAlign: 'center', marginBottom: '1%'}}>
        <Col>
          My education has played a huge role in making me who I am today as well as developing the skills I now possess. Select a card below to learn more about my educational background.
        </Col>
      </Row>
      <Row style={{marginBottom: '3%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedItem === 'unm' && <input id="unm-card" type="checkbox" className="radio"/>}
          <label className="slider" htmlFor="unm-card">
            <UNMCarousel/>
            <div className="slide-out">
              <h3>Computer Engineering</h3>
              <RedDividerHorizontal/>
                
              <div>
                <p>Focus: Internet of Things</p>
                <p>GPA: 4.0</p>
                <p>Thesis: Coming Soon</p>
              </div>
            </div>
          </label>
        </Col>
      </Row>
      <Row style={{marginBottom: '3%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedItem === 'uw' && <input id="uw-card" type="checkbox" className="radio"/>}
          <label className="slider" htmlFor="uw-card">
            <UWCarousel/>
            <div className="slide-out">
                <h3>Physics & Electrical Engineering</h3>
                <RedDividerHorizontal/>
                
                <div>
                  <p>Focus:</p>
                  <p style={{margin: '-15px 0 0 15px'}}>Physics: Comprehensive</p>
                  <p style={{margin: '0 0 5px 15px'}}>EE: Embedded Computing Systems</p>
                  <p>GPA: 3.39</p>
                  <p>Extras:</p>
                  <p style={{margin: '-15px 0 0 15px'}}>Air Force ROTC</p>
                  <p style={{margin: '0 0 5px 15px'}}>UW Research <a href="https://arthurbarnard.com/">site</a></p>
                </div>
            </div>
          </label>
        </Col>
      </Row>
    </Container>
  );
};
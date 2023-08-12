import { Container, Col, Row } from 'react-bootstrap'
import { USSFCarousel, HomeDepotCarousel } from '../components/Carousels.js';
import { AppContext } from '../App.js'
import { useContext }  from 'react'
import { RedDividerVertical} from '../styles/styled-components.js'

export const CareerMobile = () => {
  const {selectedItem} = useContext(AppContext);

  return (
    <Container fluid style={{
      marginTop: '80vh'
    }}>
      <Row style={{textAlign: 'center'}}>
        <Col>
          <h3>Career</h3>
        </Col>
      </Row>
      <Row style={{textAlign: 'center', marginBottom: '10%'}}>
        <Col>
          My career has allowed me to foster connections, hone my skills, and develop new ones. Select a card below to learn more about my career.
        </Col>
      </Row>
      <Row style={{marginBottom: '10%'}}>
        <Col style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedItem === 'ussf' && <input id="ussf-card" type="checkbox" className="radio"/>}
          <label className="flip-card" htmlFor="ussf-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <USSFCarousel/>
              </div>
              <div className="flip-card-back">
                <h6>United States Space Force</h6>
                <RedDividerVertical/>

                <div className="card-contents">
                  <p>
                    The Space Force is my current employer and has provided me with various
                    opportunities.<br/><br/>
                  </p>
                  <p>Locations:</p>
                  <ul>
                    <li>AFRL - Starfire Optical Range</li>
                    <li>Space CAMP (Supra Coders)</li>
                  </ul>
                  <p>Skills:</p>
                  <ul>
                    <li>Software Development</li>
                    <li>Program Management</li>
                  </ul>
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
          {selectedItem === 'hd' && <input id="hd-card" type="checkbox" className="radio"/>}
          <label className="flip-card" htmlFor="hd-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <HomeDepotCarousel/>
              </div>
              <div className="flip-card-back">
                <h6>Home Depot</h6>
                <RedDividerVertical/>

                <div className="card-contents">
                  <p>
                    We all start somewhere! Home Depot claims the title of my first job and provided me with some fundamental skills.<br/><br/>
                  </p>
                  <p>Roles:</p>
                  <ul>
                    <li>Sales Associate</li>
                  </ul>
                  <p>Skills:</p>
                  <ul>
                    <li>Customer Service</li>
                    <li>Time Management</li>
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
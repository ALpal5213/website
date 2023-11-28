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
  SkillsIconSmall,
  SkillsIconLarge,
} from '../styles/styled-components.js'

export const NavbarSmallScreen = () => {
  const {selectedView, setSelectedView} = useContext(AppContext);

  const handleClickScroll = () => {
    const element = document.getElementById('top-navbar');
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700);
  };

  const handleCloseScroll = () => {
    const element = document.getElementById('top-page');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      setSelectedView('none');
    }, 700);
  };

  return (
    <Container fluid style={{
      color: '#ffffff',
      textAlign: 'center',
      position: 'absolute',
      bottom: '10px'
    }}>
      <Row id="top-navbar">
        <RedDividerHorizontal />
      </Row>
      <Row>
        <Col xs={4} onClick={() => {
          if (selectedView === 'career') {
            handleCloseScroll();
          } else { 
            setSelectedView('career');
            handleClickScroll();
          }   
        }}>{
          <div className='menu-icon-mobile' style={{
            color: selectedView === 'career' ? '#800000' : '#ffffff',
            backgroundColor: selectedView === 'career' ? 'rgba(255, 255, 255, .33)' : 'rgba(0, 0, 0, 0)' ,
            borderRadius: '5px'
          }}>
            <BriefcaseIconSmall />
            <div>Career</div>
          </div>
        }</Col>
        <Col xs={4} onClick={() => {
          if (selectedView === 'education') {
            handleCloseScroll();
          } else { 
            setSelectedView('education');
            handleClickScroll();
          }   
        }}>{
          <div className='menu-icon-mobile' style={{
            color: selectedView === 'education' ? '#800000' : '#ffffff',
            backgroundColor: selectedView === 'education' ? 'rgba(255, 255, 255, .33)' : 'rgba(0, 0, 0, 0)' ,
            borderRadius: '5px'
          }}>
            <EducationIconSmall />
            <div>Education</div>
          </div>
        }</Col>
        <Col xs={4} onClick={() => {
          if (selectedView === 'skills') {
            handleCloseScroll();
          } else { 
            setSelectedView('skills');
            handleClickScroll();
          }   
        }}>{
          <div className='menu-icon-mobile' style={{
            color: selectedView === 'skills' ? '#800000' : '#ffffff',
            backgroundColor: selectedView === 'skills' ? 'rgba(255, 255, 255, .33)' : 'rgba(0, 0, 0, 0)' ,
            borderRadius: '5px'
          }}>
            <SkillsIconSmall />
            <div>Skills</div>
          </div>
        }</Col>
      </Row>
    </Container>
  );
}

export const NavbarLargeScreen = () => {
  const {selectedView, setSelectedView} = useContext(AppContext);

  const handleClickScroll = () => {
    setTimeout(() => {
      const element = document.getElementById('top-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleCloseScroll = () => {
    const element = document.getElementById('top-page');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      setSelectedView('none');
    }, 1000);
  };

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
          <div 
            className='menu-icon-desktop' 
            onClick={() => {
              if (selectedView === 'career') {
                handleCloseScroll();
              } else { 
                setSelectedView('career');
                handleClickScroll();
              }            
            }}
            style={{
              color: selectedView === 'career' ? '#800000' : '#ffffff',
              backgroundColor: selectedView === 'career' ? 'rgba(255, 255, 255, .33)' : 'rgba(0, 0, 0, 0)' ,
              borderRadius: '5px'
            }}>
            <BriefcaseIconLarge />
            <div>Career</div>
          </div>
        }</Col>
        <Col xs={12}>{
          <div 
          className='menu-icon-desktop' 
          onClick={() => {
            if (selectedView === 'education') {
              handleCloseScroll();
            } else { 
              setSelectedView('education');
              handleClickScroll();
            }   
          }}
          style={{
            color: selectedView === 'education' ? '#800000' : '#ffffff',
            backgroundColor: selectedView === 'education' ? 'rgba(255, 255, 255, .33)' : 'rgba(0, 0, 0, 0)' ,
            borderRadius: '5px'
          }}>
            <EducationIconLarge />
            <div>Education</div>
          </div>
        }</Col>
        <Col xs={12}>{
          <div 
          className='menu-icon-desktop' 
          onClick={() => {
            if (selectedView === 'skills') {
              handleCloseScroll();
            } else { 
              setSelectedView('skills');
              handleClickScroll();
            }   
          }}
          style={{
            color: selectedView === 'skills' ? '#800000' : '#ffffff',
            backgroundColor: selectedView === 'skills' ? 'rgba(255, 255, 255, .33)' : 'rgba(0, 0, 0, 0)' ,
            borderRadius: '5px'
          }}>
            <SkillsIconLarge />
            <div>Skills</div>
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
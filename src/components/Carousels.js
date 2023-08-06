import { Container, Col, Row, Carousel } from 'react-bootstrap';

export const MainCarouselMobile = () => {
  return (
    <Carousel fade controls={false} variant={'dark'} style={{
      overflow: 'hidden',
      width: '80%',
      height: '60vh',
      boxShadow: '10px 5px 10px black',
      borderRadius: '10px',
      marginTop: '10%'
    }}>
      <Carousel.Item >
        <img 
          src="AdrianSpeechMobile.jpg" 
          alt="Adrian Giving a Speech" 
          width={'100%'}
        />
      </Carousel.Item>
      <Carousel.Item >
        <img 
          src="AdrianWithWifeMobile.jpg" 
          alt="Adrian With his Wife" 
          width={'100%'}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export const MainCarouselDesktop = () => {
  return (
    <Carousel fade style={{
      overflow: 'hidden',
      width: '80%',
      height: '60vh',
      boxShadow: '10px 5px 10px black',
      borderRadius: '10px',
      marginTop: '13%'
    }}>
      <Carousel.Item >
        <img 
          src="AdrianSpeechDesktop.jpg" 
          alt="Adrian Giving a Speech" 
          width={'100%'}
        />
      </Carousel.Item>
      <Carousel.Item >
        <img 
          src="AdrianWithWifeDesktop.jpg" 
          alt="Adrian With his Wife" 
          width={'100%'}
        />
      </Carousel.Item>
    </Carousel>
  );
}
import { Container, Col, Row, Carousel } from 'react-bootstrap';

export const MainCarouselMobile = () => {

  return (
    <Carousel fade controls={false} variant={'dark'} style={{
      overflow: 'hidden',
      width: '80%',
      height: '60vh',
      boxShadow: '10px 5px 10px #000000',
      borderRadius: '10px',
      position: 'absolute',
      bottom: '20px',
      marginBottom: '20%',
    }}>
      <Carousel.Item style={{
        position: 'relative',
        left: '-25px',
        position: 'relative'
      }}>
        <div>
          <img 
            // src="website/AdrianSpeechMobile.jpg"
            src="AdrianSpeechMobile.jpg" 
            alt="Adrian Giving a Speech" 
            width={'120%'}
            // height={'1000px'}
            // paddingTop={'-50px'}
          />
        </div> 
      </Carousel.Item>
      <Carousel.Item style={{
        position: 'relative',
        left: '-25px'
      }}>
        <img 
          // src="website/AdrianWithWifeMobile.jpg" 
          src="AdrianWithWifeMobile.jpg" 
          alt="Adrian With his Wife" 
          width={'120%'}
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
      height: '25vw',
      boxShadow: '10px 5px 10px black',
      borderRadius: '10px',
      marginTop: '25vh'
    }}>
      <Carousel.Item >
        <img 
          // src="website/AdrianSpeechDesktop.jpg"
          src="AdrianSpeechDesktop.jpg" 
          alt="Adrian Giving a Speech" 
          width={'100%'}
        />
      </Carousel.Item>
      <Carousel.Item >
        <img 
          // src="website/AdrianWithWifeDesktop.jpg" 
          src="AdrianWithWifeDesktop.jpg"
          alt="Adrian With his Wife" 
          width={'100%'}
        />
      </Carousel.Item>
    </Carousel>
  );
}
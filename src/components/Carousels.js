import { Container, Col, Row, Carousel } from 'react-bootstrap';
import { AppContext } from '../App.js'
import { useContext }  from 'react'

const dev = "website/";

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
        left: '-25px'
      }}>
        <img 
          // src="website/AdrianWithWifeMobile.jpg" 
          src="AdrianWithWifeMobile.jpg" 
          alt="Adrian With his Wife" 
          width={'120%'}
        />
      </Carousel.Item>
      <Carousel.Item style={{
        position: 'relative',
        left: '-25px'
      }}>
        <div>
          <img 
            // src="website/AdrianSpeechMobile.jpg"
            src="AdrianSpeechMobile.jpg" 
            alt="Adrian Giving a Speech" 
            width={'120%'}
          />
        </div> 
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
          // src="website/AdrianWithWifeDesktop.jpg" 
          src="AdrianWithWifeDesktop.jpg"
          alt="Adrian With his Wife" 
          width={'100%'}
        />
      </Carousel.Item>
      <Carousel.Item >
        <img 
          // src="website/AdrianSpeechDesktop.jpg"
          src="AdrianSpeechDesktop.jpg" 
          alt="Adrian Giving a Speech" 
          width={'100%'}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export const UWCarousel = () => {
  const {selectedItem, setSelectedItem} = useContext(AppContext);

  return (
    <Carousel controls={false} indicators={false} variant={'dark'} style={{
      overflow: 'hidden',
      width: '100%',
      boxShadow: '10px 8px 10px #000000',
      borderRadius: '10px',
    }} onClick={() => {
      selectedItem === 'uw' ? setSelectedItem('none') : setSelectedItem('uw');
    }}>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/BachelorsCover.jpg"
            src="BachelorsCover.jpg"
            alt="Bachelors Degree" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/SuzzalloInTheDark.jpg"
            src="SuzzalloInTheDark.jpg" 
            alt="Suzzallo Library" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/UWCherryBlossoms.jpg"
            src="UWCherryBlossoms.jpg" 
            alt="UW Cherry Blossoms" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
    </Carousel>
  );
}

export const UNMCarousel = () => {
  const {selectedItem, setSelectedItem} = useContext(AppContext);

  return (
    <Carousel controls={false} indicators={false} variant={'dark'} style={{
      overflow: 'hidden',
      width: '100%',
      boxShadow: '10px 8px 10px #000000',
      borderRadius: '10px',
    }} onClick={() => {
      selectedItem === 'unm' ? setSelectedItem('none') : setSelectedItem('unm');
    }}>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/MastersCover.jpg"
            src="MastersCover.jpg" 
            alt="Masters Cover" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/abq-dark.jpg"
            src="abq-dark.jpg" 
            alt="Albququerque at night" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/lobo-mascot.jpg"
            src="lobo-mascot.jpg" 
            alt="Adrian with the Lobos" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
    </Carousel>
  );
}

export const HomeDepotCarousel = () => {
  const {selectedItem, setSelectedItem} = useContext(AppContext);

  return (
    <Carousel controls={false} indicators={false} variant={'dark'} style={{
      overflow: 'hidden',
      width: '100%',
      boxShadow: '10px 8px 10px #000000',
      borderRadius: '10px',
    }} onClick={() => {
      selectedItem === 'hd' ? setSelectedItem('none') : setSelectedItem('hd');
    }}>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/HomeDepotCover.jpg"
            src="HomeDepotCover.jpg" 
            alt="Home Depot Cover" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
    </Carousel>
  );
}

export const USSFCarousel = () => {
  const {selectedItem, setSelectedItem} = useContext(AppContext);

  return (
    <Carousel controls={false} indicators={false} variant={'dark'} style={{
      overflow: 'hidden',
      width: '100%',
      boxShadow: '10px 8px 10px #000000',
      borderRadius: '10px',
    }} onClick={() => {
      selectedItem === 'ussf' ? setSelectedItem('none') : setSelectedItem('ussf');
    }}>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/USSFCover.jpg"
            src="USSFCover.jpg" 
            alt="Space Force Cover" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
      <Carousel.Item style={{}}>
        <div>
          <img 
            // src="website/SOR.jpg"
            src="SOR.jpg" 
            alt="Space Force Cover" 
            width={'100%'}
          />
        </div> 
      </Carousel.Item>
    </Carousel>
  );
}
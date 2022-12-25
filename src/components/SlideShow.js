import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './Slides/img1.jpeg';
import img2 from './Slides/img2.jpeg';
import img3 from './Slides/img3.jpeg';
// import img4 from './Slides/img4.jpeg';
// import img5 from './Slides/img5.jpeg';


const Slide = styled.div`
    height: calc(100vh - 80px - 40px) !important;

    @media (max-width : 991px) {
        display: none;
    }
`

function SlideShow() {
  return (
    <Slide>
        <Carousel controls={false} pause={false} indicators={false} interval={3500}>
            <Carousel.Item className='img-container'>
                <img
                className="d-block w-100 carousel-img"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={img4}
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={img5}
                alt="Fifth slide"
                />
            </Carousel.Item> */}
        </Carousel>
    </Slide>
  );
}

export default SlideShow;

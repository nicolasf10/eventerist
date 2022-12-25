import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideShow from './SlideShow';
import Text from './Text';

const HeroSection = styled.div`
  margin: 0px;
  padding: 0px;
  height: calc(100vh - 80px);

  @media (screen-width: 991px) {
    height: auto;
  }
`

const Strip = styled.div`
  height: 40px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--red);
`


function Hero() {
  return (
    <HeroSection>
        <Container style={{margin: '0px', padding: '0px', width: '100vw'}}>
            <Row style={{margin: '0px', padding: '0px', width: '100vw'}}>
                <Col style={{margin: '0px', padding: '0px'}} lg={6} md={6} sm={12}><Text/></Col>
                <Col style={{margin: '0px', padding: '0px'}} lg={6} md={6} sm={12}><SlideShow/></Col>
            </Row>
        </Container>
        <Strip />
    </HeroSection>
  );
}

export default Hero;

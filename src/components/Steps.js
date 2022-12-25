import { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";


const StepsContainer = styled.div`
    min-height: 50vh;
    padding-top: 30px;
    color: var(--gray);
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;

    & .step {
        /* transform: translateY(100%);
        animation-name: StepFade;
        animation-duration: 0.6s;
        transform: translateY(100%); */
    }

    & .step:nth-child(1) {
        animation-delay: 2s;
    }
`

const Item = styled.div``

const Step = styled(motion.div)`
    /* background-color: tomato; */
    text-align: center;
    border: 2px solid var(--red);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    opacity:0;
    max-width: 85vw;
    margin-left: auto;
    margin-right: auto;
`

const StepKey = styled.span`
    font-size: 1.5rem;
`

const StepTitle = styled.h4`
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    display: block;
    margin: 0px;
`

const StepDescription = styled.p`

`

const StepIcon = styled.i`
    font-size: 1.5em;
    margin: 15px;
    text-align: center;
    color: var(--red);

`

const Title = styled.h1`
    font-family: "Mont-Bold", sans-serif;
    font-size: 3rem;
    text-align: center;
    margin: 40px 0px;
    justify-self: start;

    @media (max-width: 991px) {
        font-size: 2.5rem;
    }
`

function Steps() {
    const [items, setItems] = useState([
        {
            key: "1",
            title: "Sign up",
            // description: "",
            icon: "fa fa-solid fa-pen"
        },
        {
            key: "2",
            title: "Tell us what you love",
            // description: "",
            icon: "fa fa-solid fa-heart"
        },
        {
            key: "3",
            title: "Enjoy amazing experiences",
            // description: "",
            icon: "fa fa-solid fa-champagne-glasses"
        }
    ])

    return (
        <StepsContainer>
            <Title>It's as easy as 1, 2, 3</Title>
            <Container style={{justifySelf: 'center'}}>
                <Row>
                    {items.map((item) => 
                            <Col lg={4} >
                                <Step initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, duration: 1.5, delay: parseInt(item.key)/10 }} className='step'>
                                    <StepIcon className={item.icon}></StepIcon>
                                    <StepTitle><StepKey>{item.key}. </StepKey>{item.title}</StepTitle>
                                    <StepDescription>{item.description}</StepDescription>
                                </Step>
                            </Col>
                    )}
                </Row>
            </Container>
        </StepsContainer>
    );
}

export default Steps;

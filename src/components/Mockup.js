import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll } from "framer-motion"
import ComputerImg from './../images/computer.png';
import PhoneImg from './../images/phone.png';


const MockupContainer = styled.div`
    min-height: 100vh;
    /* background: linear-gradient(273deg, rgba(234,26,39,1) 0%, rgba(244,139,27,1) 100%); */
    background-color: var(--red);
    text-align: center;
    display: flex;
    justify-content: center;
`

const Computer = styled(motion.img)`
    margin: auto;

    @media (max-width: 991px) {
        display: none;
    }
`

const Phone = styled(motion.img)`
    margin: auto;
    display: none;
    
    @media (max-width: 991px) {
        display: inline;
    }
`


function Mockup() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
    })

    console.log(scrollYProgress.current);
    
    return (
        <MockupContainer ref={ref}>
            <Computer style={{ scale: scrollYProgress, maxWidth: '90vw', maxHeight: '90vh' }} src={ComputerImg} alt="computer screen"/>
            <Phone style={{ scale: scrollYProgress, maxWidth: '90vw', maxHeight: '90vh' }} src={PhoneImg} alt="phone screen"/>
        </MockupContainer>
    );
}

export default Mockup;

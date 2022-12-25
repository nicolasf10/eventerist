import styled from 'styled-components';
import MailchimpForm from './SendEmail';


const TextContainer = styled.div`
    margin: 0px;
    padding: 0px;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px;
    font-family: "Mont-Bold", "Poppins", sans-serif;
    color: var(--gray);
`

const Heading = styled.h1`
    font-size: 3.5rem;
    
    @media (max-width: 1100px) {
        font-size: 2.8rem;
    }
`

const Emojis = styled.h1`
    letter-spacing: 30px;
    margin-top: 10px;
`

const Caption = styled.p`
    color: #000;
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;

`


function Text() {
  return (
    <TextContainer>
        <Heading>Find your favorite</Heading>
        <div class="wrapper">
            <div class="words">
                <span>concerts</span>
                <span>sports events</span>
                <span>food festivals</span>
                <span>shows</span>
                <span>exhibitions</span>
                {/* <span>theatre performances</span> */}
            </div>
        </div>
        <Caption>Never miss out on another experience again</Caption>
        <Emojis>🎸🏈🍔🎭</Emojis>
        <MailchimpForm/>
    </TextContainer>
  );
}

export default Text;

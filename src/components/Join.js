import styled from 'styled-components';
import SendEmail from './SendEmail';
import EmojiBackground from './../images/emojibackground.png';
import MailchimpForm from './SendEmail';


const JoinContainer = styled.div`
    min-height: 70vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${EmojiBackground});
    background-size: cover;
    background-repeat: no-repeat;
`

const Title = styled.h1`
    font-family: "Mont-Bold", "Poppins", sans-serif;
    font-size: 3rem;
    text-align: center;
    justify-self: start;
    margin-bottom: 20px;
    color: var(--gray);
    background: #f4f4f4;

    @media (max-width: 991px) {
        font-size: 2.5rem;
    }
`

const Description = styled.p`
    font-family: "Poppins";
    background: #f4f4f4;
    font-size: 1.2rem;
`

const EmailContainer = styled.div`
    justify-self: center;
    align-self: center ;

`

const ContentContainer = styled.div`
    background: #f4f4f4;
    padding: 20px;
`

function Join() {

    const style =  {
        "SendContainer": {

        },
        "Form": {

        },
        "Input": {

        },
        "SubmitButton": {

        }
    }
    
    return (
        <JoinContainer id="join">
            <ContentContainer>
                <Title>Coming soon</Title>
                <Description>Expect to hear from us when Eventerist launches!</Description> 
                <EmailContainer><MailchimpForm style={style}/></EmailContainer>
            </ContentContainer>
        </JoinContainer>
    );
}

export default Join;

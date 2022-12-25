import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Alert from 'react-bootstrap/Alert';


const SendContainer = styled.div`
    margin-top: 20px;
`

const Form = styled.form`

`

const Input = styled.input`
    font-family: "Poppins", sans-serif;
    height: 40px;
    border-radius: 7px;
    padding: 7px;
    margin-right: 15px;
    width: 300px;
    background: #fff;
    border: 2px var(--gray) solid;
    &:focus {
        border: 2px var(--orange) solid !important;
        outline:none;
    }
`

const SubmitButton = styled.button`
    font-family: "Poppins", sans-serif;
    border: 2px solid var(--red);
    background: transparent;
    color: var(--red);
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
    padding: 0px 20px;
    font-weight: 500;
    width: 200px;
    transition: background-color 0.3s ease;

    &:hover {
        /* background: linear-gradient(273deg, rgba(234,26,39,1) 0%, rgba(244,139,27,1) 100%); */
        background-color: var(--red);
        color: #fff;
    }

    &:focus:hover {
        border: 2px solid var(--red);
    }
`

function SendEmail({ status, message, onValidated }) {

    const handleChange = (event) => {
        setEmail(event.target.value);
        console.log("changed")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });
        console.log("submit");
        setShow(false);
    }

    useEffect(() => {
        if(status === "success") clearFields();
        if (status === "success") {
            status = "alert"
        }

        if (status === "alert") {
            setShow(true);
            status = "success"
        }
        console.log(status);
    }, [status])

    const clearFields = () => {
        setEmail('');
    }

    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);

    return (
        <SendContainer>
                {show ?
                    <Alert className='alert-form' variant="success" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading className='alert-text'>Email registered!</Alert.Heading>
                    </Alert> 
                : <></>
                }
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input
                    onChange={handleChange}
                    value={email}
                    placeholder='ex: johnmclane@gmail.com'
                    type="email"
                    label="email"
                    isRequired
                />
                <SubmitButton type="submit">{status === "sending" ? <i class="fa fa-spin fa-solid fa-spinner"></i> : <span>Join the waitlist</span>}</SubmitButton>
            </Form>
        </SendContainer>
    );
}

const MailchimpForm = props => {
    const postUrl = `https://gmail.us17.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <MailchimpSubscribe url={postUrl} render={({ subscribe, status, message }) => (
                <SendEmail
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    )
}

export default MailchimpForm;

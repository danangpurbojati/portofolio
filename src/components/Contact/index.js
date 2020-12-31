import React from 'react';
import "./Contact.css"
import { ContactContainer,
    StyledForm, 
    StyledInput,
    StyledTextArea
} from './ContactElements';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r26is7o', 'template_vo5iff7', e.target, 'user_F0AUXQLL8yDNZZk1FNGC9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <ContactContainer onSubmit={sendEmail}  id="contact">
            <h1>Contact Me</h1>
            <StyledForm>
                <StyledInput name="name" placeholder="Your name.." />
                <StyledInput name="email" type="email" placeholder="Your email.." />
                <StyledInput name="subject" placeholder="Your subject.." />
                <StyledTextArea name="message" placeholder="Write something.."></StyledTextArea>

                <input type="submit" value="Submit" />                
            </StyledForm>
        </ContactContainer>
    )
}

export default Contact
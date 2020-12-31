import styled from "styled-components";

export const ContactContainer = styled.div`
    background-color: black;
    color: white;
    text-align: center;
    padding: 80px 60px 30px 60px;
`;

export const StyledForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledInput = styled.input`
    width: 500px;
    padding: 12px; 
    margin-top: 6px;
    margin-bottom: 16px; 
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid white;

    @media screen and (max-width: 768px){
        width: 90%;
    }
`;

export const StyledTextArea = styled.textarea`
    width: 500px;
    padding: 12px; 
    margin-top: 6px;
    margin-bottom: 16px; 
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    resize: none;
    height: 200px;
    
    @media screen and (max-width: 768px){
        width: 90%;
    }
`;
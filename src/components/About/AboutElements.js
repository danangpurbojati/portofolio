import styled from "styled-components";

export const AboutContainer = styled.div`
    padding: 80px 60px 30px 60px;
    background-color: black;
    color: white;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 60px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 480px){
        padding: 20px;
    }
`;

export const AboutWrapper = styled.div`
`;

export const AboutTitle = styled.h1`
    margin-bottom: 24px;

    @media screen and (max-width: 768px){
        text-align: center;
        margin-bottom: 16px;
    }
`;

export const AboutParagraf = styled.p`
    line-height: 32px;
    text-align: justify;
`;

export const SocialWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const LinkWrapper = styled.a`
    color: white;
    cursor: pointer;
    margin: 10px;
    width: 80px;
    height: 80px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    transition: .5s ease-in-out;
    
    :hover{
        background-color: white;
        color: black;
    }
`;

export const Certificate = styled.a`
    display: inline-block;
    width: 100%;
    background-color: rgba(109, 109, 110, 0.1);
    margin-bottom: 12px;
    padding: 8px 14px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    transition: .3s ease-in-out;

    :hover{
        background-color: rgba(109, 109, 110, 0.5);
    }

    h3{
        font-size: 16px;
    }
`;

export const DetailCertificate = styled.div`
    display: flex;
    margin-top: 8px;

    p{
        font-size: 14px;
        margin-right: 20px;
    }
`;

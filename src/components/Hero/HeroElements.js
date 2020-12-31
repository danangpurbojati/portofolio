import styled from "styled-components";
import {Link} from "react-scroll";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;

    :before{
        content: "";
        position: absolute;
        top: 0;
        left:0;
        right:0;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
    }
`;

export const VideoBackground = styled.video`
    width: 100%;
    height:100%;
    -o-object-fit: cover;
    object-fit:cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 16px;
    display: flex;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const HeroLink = styled(Link)`
    margin: 8px;
    border: 1px solid white;
    color: ${({btnActive}) => (btnActive ? "black" : "white")};
    background-color: ${({btnActive}) => (btnActive ? "white" : "transparent")};
    padding: 8px 16px;
    cursor: pointer;
    font-weight: bold;
    transition: .2s ease-in-out;
    display: flex;
    align-items: center;

    span{
        margin-right: 5px;
    }

    :hover{
        color: ${({btnActive}) => (btnActive ? "white" : "black")};
        background-color: ${({btnActive}) => (btnActive ? "transparent" : "white")};
    }
`;

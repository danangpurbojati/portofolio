import styled from "styled-components";
import backgroundHe from "./project-background.jpeg";

export const LinkOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    transition: .5s;
`;

export const ProjectContainer = styled.div`
    padding: 80px 60px 30px 60px;
    background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${backgroundHe});
    background-attachment: fixed;

    h1{
        text-align: center;
        color: white;
        margin-bottom: 30px;
    }
`;

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 300px;
    grid-gap: 24px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`;

export const GalleryWrapper = styled.div`
    position: relative;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;    
    }

    &:hover{
        ${LinkOverlay}{
            height: 100%;
        }
    }
`;

export const GalleryText = styled.div`
    position: absolute;
    bottom: 0;
    background-color: black;
    color: white;
    width: 100%;
    padding: 10px;
`;

export const GalleryTitle = styled.p`
    font-size: 20px;
    text-transform: capitalize;
`;

export const TagWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap
`;

export const TagContent = styled.p`
    border-radius: 5px;
    border: 1px solid white;
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    padding: 2px 6px;
`;



export const LinkWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    font-weight: bold;
    padding: 8px 16px;
    margin-bottom: 16px;
    transition: .2s ease-in-out;

    span{
        margin-right: 5px;
    }

    :hover{
        background-color: black;
        color: white;
        border: 1px solid white;
    }
`;


import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

export const SidebarContainer = styled.div`
    position:fixed;
    z-index: 999;
    width:100%;
    height:100%;
    background-color: black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    font-size: 22px;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const SidebarWrapper = styled.div`  
    color: white;
`;


export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px)
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
    cursor: pointer;
    transition: .2s ease-in-out;

    :hover{
        font-weight: bold;
    }
`;
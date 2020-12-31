import styled from "styled-components";
import {Link} from "react-scroll";


export const NavbarContainer = styled.nav`
    position: fixed;
    background-color: ${({colorNav}) => (colorNav ? "transparent" : "black")};
    width: 100%;
    z-index: 1;
    transition: .5s ease-in-out;
    border-bottom: ${({colorNav}) => (colorNav ? "none" : "1px solid white")};
`;

export const NavWrapper = styled.div`
    /* border: 1px solid blue; */
    padding: 0 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 480px){
        padding: 0 30px;
    }
`;

export const NavLogo = styled.h2`
    /* background-color: red; */
    cursor: pointer;
    color: white;
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    /* border: 1px solid black; */
`;

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    /* border: 1px solid green; */

    @media screen and (max-width: 768px){
        display:none;
    }
    
`;

export const NavItem = styled.li`
    /* border: 1px solid black; */
    height: 60px;
`;

export const NavLink = styled(Link)`
    /* background-color: black; */
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;

    &:hover{
        font-weight: bold;
    }

    &.active{
        font-weight:bold;
        border-bottom: 4px solid white;
    }
`;

export const Hamburger = styled.div`
    display: none;
    color: white;
    font-size: 30px;
    cursor: pointer;

    @media screen and (max-width: 768px){
        display: block;
    }
`;
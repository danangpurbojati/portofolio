import React, {useState, useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import {
    NavbarContainer,
    NavLogo,
    NavWrapper,
    NavMenu,
    NavItem,
    NavLink,
    Hamburger
} from "./NavbarElements";
import {animateScroll as scroll, ScrollElement} from "react-scroll";



const Navbar = ({toggle}) => {
    const [colorNav, setColorNav] = useState(true); 

    const scrollNav = () => {
        if(window.scrollY > 60){
            setColorNav(false);
        }else{
            setColorNav(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollNav);
    }, [])

    const scrollTop = () => {
        scroll.scrollToTop();
    }

    return (
        <NavbarContainer  colorNav={colorNav}>
            <NavWrapper>
                <NavLogo onClick={scrollTop}>DWP</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLink to="hero" offset={-60} spy={true} smooth={true} duration={500}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="about" offset={-60} spy={true} smooth={true} duration={500}>About Me</NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink to="project" offset={-60} spy={true} smooth={true} duration={500}>My Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="contact" offset={-60} spy={true} smooth={true} duration={500}>Contact Me</NavLink>
                    </NavItem>
                </NavMenu>
                <Hamburger onClick={toggle}>
                    <FaBars />
                </Hamburger>
            </NavWrapper>
        </NavbarContainer>
    )
}

export default Navbar

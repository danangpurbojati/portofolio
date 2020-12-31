import React from 'react';
import Video from "./video/aurora-hd.mp4"
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
    ButtonWrapper,
    HeroLink
} from "./HeroElements";
import { FaRegEnvelope, FaTools } from "react-icons/fa";

const Hero = () => {
    return (
        <HeroContainer id="hero">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroH1>Danang Wahyu Purbojati</HeroH1>
                <HeroP>
                    Hi, i'm front end web developer. Proficient in HTML, CSS and Javascript. check my works below
                </HeroP>
                <ButtonWrapper>
                    <HeroLink btnActive={true} to="project"  offset={-60} spy={true} smooth={true} duration={500}>
                        <span>My Projects</span> 
                        <FaTools />
                    </HeroLink>
                    <HeroLink to="contact"  offset={-60} spy={true} smooth={true} duration={500}>
                        <span>Contact Me</span> 
                        <FaRegEnvelope />
                    </HeroLink>
                </ButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

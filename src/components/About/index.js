import React from 'react';
import {FaLinkedin, FaGithub, FaDownload} from "react-icons/fa"
import { AboutContainer, AboutParagraf, AboutTitle, AboutWrapper, Certificate, DetailCertificate, LinkWrapper, SocialWrapper } from './AboutElements';

import certificates from "./Data";

const About = () => {

    return (        
        <AboutContainer id="about">
            <AboutWrapper>
                <AboutTitle>About Me</AboutTitle>
                <AboutParagraf>
                    My name is Danang Wahyu Purbojati. I'm frontend web devoloper who proficient in html, css, and javascript. Experienced translating ui/ux design to frontend web and make it responsive. Be able to create single page aplication, progressive web application and able to work with frontend framework and library such as ReactJs, Materialize-Css and Bootstrap.
                </AboutParagraf>
                <SocialWrapper>
                    <LinkWrapper href="https://www.linkedin.com/in/danang-wahyu-purbojati-b03902b4/" target="_blank" title="Linkedin">
                        <FaLinkedin />
                    </LinkWrapper>
                    <LinkWrapper href="https://github.com/danangpurbojati" target="_blank">
                        <FaGithub title="Github" />
                    </LinkWrapper>
                    <LinkWrapper title="Download CV">
                        <FaDownload />
                    </LinkWrapper>
                </SocialWrapper>
            </AboutWrapper>  
            <AboutWrapper>
                <AboutTitle>Certificatications</AboutTitle>
                {
                    certificates.map(certificate => (
                        <Certificate href={certificate.link} target="_blank" key={certificate.id}>
                            <h3>{certificate.name}</h3>                    
                                <DetailCertificate>
                                    <p>{certificate.from}</p>
                                    <p>Year: {certificate.year}</p>
                                </DetailCertificate>
                        </Certificate>
                    ))
                }
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About

import React, {useState} from 'react';
import { GalleryContainer, GalleryText, GalleryTitle, GalleryWrapper, LinkOverlay, ProjectContainer, TagContent, TagWrapper, LinkWrapper, ProjectLink } from './ProjectElements';
import { FaGithub, FaDesktop } from "react-icons/fa";
import dataProjects from "./Data";

const Projects = () => {

    return (
        <ProjectContainer id="project" >
            <h1>My Projects</h1>
            <GalleryContainer>
                {
                    dataProjects.map(project => (
                        <GalleryWrapper key={project.id}>
                            <img src={project.img} alt="project"/>
                            <GalleryText>
                                <GalleryTitle>{project.name}</GalleryTitle>
                                <TagWrapper>
                                    {
                                        project.tags.map((tag,index) => (
                                            <TagContent key={index}>{tag}</TagContent>
                                        ))
                                    }
                                </TagWrapper>
                            </GalleryText>
                            <LinkOverlay >
                                <LinkWrapper>
                                    <ProjectLink href={project.linkLive} target="_blank"><span>Live Demo</span> <FaDesktop /></ProjectLink>
                                    <ProjectLink href={project.linkGithub} target="_blank"><span>View Code</span> <FaGithub /></ProjectLink>
                                </LinkWrapper>
                            </LinkOverlay>
                        </GalleryWrapper>

                    ))
                }
            </GalleryContainer>    
        </ProjectContainer>
    )
}

export default Projects

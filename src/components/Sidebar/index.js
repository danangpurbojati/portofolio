import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="hero">Home</SidebarLink>
                    <SidebarLink onClick={toggle} to="about">About Me</SidebarLink>
                    <SidebarLink onClick={toggle} to="project">My Projects</SidebarLink>
                    <SidebarLink onClick={toggle} to="contact">Contact Me</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar

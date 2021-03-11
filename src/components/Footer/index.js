import React from 'react'
import {FaFacebook , FaInstagram, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, SocialIcons, WebsiteRights, SocialIconLink} from './FooterElements'

const Footer = () =>{
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon /> EXPLOR
                    </SocialLogo>
                </SocialMediaWrap>
            </SocialMedia>
            <WebsiteRights>
                EXPLOR @ {new Date().getFullYear() }
            </WebsiteRights>
            <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                    <FaLinkedin />
                </SocialIconLink>
            </SocialIcons>
        </FooterContainer>
    )
}
export default Footer

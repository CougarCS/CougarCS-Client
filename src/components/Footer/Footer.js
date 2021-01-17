import React from 'react';
import './Footer.css';
import { Nav, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../assets/logo.png';

import fb from '../../assets/icons/facebook-f.png';
import ig from '../../assets/icons/instagram.png';
import ds from '../../assets/icons/discord.png';
import li from '../../assets/icons/linkedin.png';
import yt from '../../assets/icons/youtube.png'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <img src={logo} className="footer-logo" alt="CougarCS - Computer Science Organization in University of Houston" />
                <Nav className="social-icons">
                    <Nav.Item>
                        <Nav.Link href="https://www.facebook.com/cougarcs" target="_blank" rel="nofollow noopener"><img src={fb} alt="Facebook Icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/company/cougarcs-uh/" target="_blank" rel="nofollow noopener"><img src={li} alt="Linkedin Icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.instagram.com/uhcougarcs/" target="_blank" rel="nofollow noopener"><img src={ig} alt="Instagram Icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://discord.gg/CRrfhjV6" target="_blank" rel="nofollow noopener"><img src={ds} alt="Discord Icon" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.youtube.com/channel/UCmQNLzXBML0vaUbSEnHVbLA?view_as=subscriber" target="_blank" rel="nofollow noopener"><img src={yt} alt="Youtube Icon" /></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="policy-links">
                    <LinkContainer to="/privacy-policy/">
                        <Nav.Link>Privacy Policy</Nav.Link>
                    </LinkContainer>
                    <span>|</span>
                    &copy; Copyright {new Date().getFullYear()}
                </Nav>
            </div>
        </footer>
    );

}

export default Footer;
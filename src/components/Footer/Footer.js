import React, { useState } from 'react';
import './Footer.css';
import { Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';

import fb from '../../assets/icons/facebook-f.png';
import ig from '../../assets/icons/instagram.png';
import ds from '../../assets/icons/discord.png';
import li from '../../assets/icons/linkedin.png';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <img src={logo} className="footer-logo" alt="CougarCS - Computer Science Organization in University of Houston" />
                <Nav className="social-icons">
                    <Nav.Item>
                        <Nav.Link href="https://www.facebook.com/cougarcs" target="_blank" rel="nofollow noopener"><img src={fb} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/company/cougarcs-uh/" target="_blank" rel="nofollow noopener"><img src={li} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.instagram.com/uhcougarcs/" target="_blank" rel="nofollow noopener"><img src={ig} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://discord.gg/CRrfhjV6" target="_blank" rel="nofollow noopener"><img src={ds} /></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="policy-links">
                    {/* <Nav.Link href="/">Terms</Nav.Link>
                    <span>|</span>
                    <Nav.Link href="/">Privacy Policy</Nav.Link>
                    <span>|</span> */}
                    &copy; Copyright {new Date().getFullYear()}
                </Nav>
            </div>
        </footer>
    );

}

export default Footer;
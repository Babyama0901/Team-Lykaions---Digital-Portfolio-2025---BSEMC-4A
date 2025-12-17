import React from 'react';
import './Footer.css';
// Importing the logo. Note the double spaces in the filename as verified in the file system.
import footerLogo from '../Logo/Relentless Lukaions.png';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-left">
                <img src={footerLogo} alt="Relentless Lykaions" className="footer-logo-img" />
            </div>

            <div className="footer-center">
                <p className="footer-text">West Visayas State University</p>
                <p className="footer-text">College of Information and Communications Technology</p>
                <p className="footer-text">Division of Entertainment and Multimedia Computing</p>
            </div>

            <div className="footer-right">
                <p className="footer-text">&copy; 2025 Team Lykaions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

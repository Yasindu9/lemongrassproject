import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled(Box)(({ theme }) => ({
    padding: '20px 60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    borderTop: '1px solid #444444',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column', // Stack items vertically on mobile
        padding: '20px',
        textAlign: 'center',
    },
}));

const LeftContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center', // Center-align on mobile
        marginBottom: '15px',
    },
}));

const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
});

const Logo = styled('img')({
    height: 20,
    marginRight: 8,
});

const SocialIconsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '15px',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center', // Center-align icons on mobile
    },
}));

const Footer = () => {
    return (
        <FooterContainer>
            {/* Left Side: Logo and Contact Information */}
            <LeftContainer>
                <LogoContainer>
                    <Logo src={`${process.env.PUBLIC_URL}/icon.png`} alt="Logo" />
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                        Agri HUB
                    </Typography>
                </LogoContainer>
                <Typography variant="body2"> lemongrassproject@gmail.com</Typography>
                <Typography variant="body2">+94 0772345678</Typography>
            </LeftContainer>

            {/* Right Side: Social Media Icons */}
            <SocialIconsContainer>
                <IconButton color="inherit" href="https://facebook.com" target="_blank">
                    <FaFacebook />
                </IconButton>
                <IconButton color="inherit" href="https://instagram.com" target="_blank">
                    <FaInstagram />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com" target="_blank">
                    <FaTwitter />
                </IconButton>
            </SocialIconsContainer>
        </FooterContainer>
    );
};

export default Footer;

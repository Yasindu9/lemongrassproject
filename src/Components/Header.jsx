import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Logo = styled('img')({
  height: 30,
  marginRight: 8,
});

const NavLink = styled(Button)(({ theme, active }) => ({
  color: active ? '#678f67' : '#333',
  fontWeight: 500,
  fontSize: '1rem',
  margin: '0 15px',
  position: 'relative',
  '&::after': {
    content: '""',
    display: active ? 'block' : 'none',
    position: 'absolute',
    bottom: -4,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#f1a20e',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    margin: '0 10px',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f1a20e',
  color: '#fff',
  padding: '10px 20px',
  fontWeight: 'bold',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#e0940c',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px',
    fontSize: '0.9rem',
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState('Home');
  const navigate = useNavigate(); // Initialize navigate

  const handleNavClick = (section) => {
    setActiveTab(section);
    switch (section) {
      case 'Home':
        navigate('/');
        break;
      case 'About Us':
        navigate('/about');
        break;
      case 'Lemon Grass':
        navigate('/lemon_grass');
        break;
      case 'Our Visits':
        navigate('/visits');
        break;
        case 'Feedbacks':
            navigate('/feedbacks');
            break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: isMobile ? '10px' : '20px 60px' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Logo src={`${process.env.PUBLIC_URL}/icon.png`} alt="Logo" />
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>
            Agri HUB
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box display={{ xs: 'none', sm: 'flex' }} justifyContent="center" flexGrow={1}>
          <NavLink onClick={() => handleNavClick('Home')} active={activeTab === 'Home'}>
            Home
          </NavLink>
          <NavLink onClick={() => handleNavClick('About Us')} active={activeTab === 'About Us'}>
            About Us
          </NavLink>
          <NavLink onClick={() => handleNavClick('Lemon Grass')} active={activeTab === 'Lemon Grass'}>
            Lemon Grass
          </NavLink>
          <NavLink onClick={() => handleNavClick('Our Visits')} active={activeTab === 'Our Visits'}>
            Our Visits
          </NavLink>
          <NavLink onClick={() => handleNavClick('Feedbacks')} active={activeTab === 'Feedbacks'}>
          Feedbacks
          </NavLink>
        </Box>

        {/* Contact Button */}
        <ContactButton variant="contained" startIcon={<FaPhone />} sx={{ ml: { xs: 0, sm: 2 } }}>
          Call Anytime
          <span style={{ marginLeft: '10px', fontWeight: 'normal' }}>+94 77234 5678</span>
        </ContactButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

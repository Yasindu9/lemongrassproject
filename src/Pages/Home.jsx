import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Keyframes for typing effect
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

// Hero section styling
const HeroSection = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '70vh',
  backgroundImage: `url(${process.env.PUBLIC_URL}/Section%20one.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '50vh', // Shorter height for mobile view
  },
}));

// Typing effect styling for HeroText
const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 300,
  color: '#FFFFFF',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  lineHeight: '1.2',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: '3px solid #FFFFFF', // cursor effect
  width: '100%', // allows the text to be fully displayed after animation
  animation: `${typing} 2s steps(40, end) forwards, ${blink} 0.75s step-end infinite`,
  animationDelay: '0s, 2s', // stops blinking cursor after typing finishes
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem', // Smaller font size for mobile view
    padding: '0 20px', // Add padding for better spacing on smaller screens
  },
}));

// Wrapper for the HeroText to apply typing effect on multi-line text
const HeroTextWrapper = styled(Box)({
  display: 'inline-block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <HeroTextWrapper>
          <HeroText>
            The Journey of <br /> Lemongrass in Sri Lanka
          </HeroText>
        </HeroTextWrapper>
      </HeroSection>
    </div>
  );
};

export default Home;

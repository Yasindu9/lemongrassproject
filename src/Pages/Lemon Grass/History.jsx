import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MiniBar from '../../Components/MiniBar'; // Import MiniBar component

const ContentSection = styled(Box)(({ animate }) => ({
  backgroundColor: '#2E4C2E', // Dark green background
  color: '#FFFFFF',
  padding: '80px 20px',
  minHeight: '70vh',
  textAlign: 'justify',
  display: 'flex',
  alignItems: 'center',
  transform: animate ? 'translateY(0)' : 'translateY(50px)', // Slide effect
  opacity: animate ? 1 : 0, // Fade effect
  transition: 'transform 0.8s ease, opacity 0.8s ease', // Slowed animation to 0.8s
}));

const HistoryText = styled(Typography)({
  fontSize: '1.3rem', // Increased font size for better readability
  lineHeight: '1.8',
  maxWidth: '90%', // Expands the text container width to fill more space
  margin: 'auto',
  paddingLeft: '30px',
  borderLeft: '4px solid #CCCCCC',
});

const History = () => {
  const [activeTab, setActiveTab] = useState('History'); // Default active tab is "History"
  const [animate, setAnimate] = useState(false); // Control animation

  const handleNavClick = (tab) => {
    setActiveTab(tab);
  };

  // Trigger animation only when "History" is the active tab
  useEffect(() => {
    if (activeTab === 'History') {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [activeTab]);

  return (
    <Box>
      {/* MiniBar Component with activeTab and onTabClick */}
      <MiniBar activeTab={activeTab} onTabClick={handleNavClick} />

      {/* Content Section with slide and fade effect on click */}
      <ContentSection animate={animate}>
        <Container>
          {activeTab === 'History' && (
            <HistoryText>
              The oldest known text about lemongrass oil had been found from the Philippines in the 17th century.
              It had been introduced to Jamaica in 1799 and to Haiti and USA in 1917. First commercial cultivation
              of lemongrass was reported in Florida, USA, and Haiti in 1947. It is not known when or by whom introduced 
              lemongrass to Sri Lanka. According to the reports available at the national herbarium in 1905, a Sri Lankan 
              researcher called Mr. J.F Jovit had acquired several plants of “Kochin Sera” (Cymbopogon citratus) from 
              South India and had planted them at Bandarawela Farm for research purposes. Several large-scale cultivation 
              of lemongrass had been existed in Sri Lanka in several decades ago but currently, only a few small 
              cultivation exist.
            </HistoryText>
          )}
        </Container>
      </ContentSection>
    </Box>
  );
};

export default History;

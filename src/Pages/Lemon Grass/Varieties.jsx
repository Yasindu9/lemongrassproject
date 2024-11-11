import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import MiniBar from '../../Components/MiniBar';
import { useNavigate } from 'react-router-dom';

const ContentSection = styled(Box)(({ animate }) => ({
  backgroundColor: '#2E4C2E',
  color: '#FFFFFF',
  padding: '60px 20px',
  minHeight: '100vh',
  textAlign: 'justify',
  display: 'flex',
  alignItems: 'center',
  transform: animate ? 'translateY(0)' : 'translateY(50px)', // Slide effect
  opacity: animate ? 1 : 0, // Fade effect
  transition: 'transform 1.1s ease, opacity 1.1s ease', // Slowed animation to 0.8s
}));

const TextBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  margin: '30px 0',
});

const ImageContainer = styled(Box)({
  width: '300px',
  height: '200px',
  marginRight: '20px',
  borderRadius: '4px',
  overflow: 'hidden',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Varieties = () => {
  const [animate, setAnimate] = useState(false); // Control animation
  const navigate = useNavigate();

  const onTabClick = (tab) => {
    if (tab === 'History') {
      navigate('/lemon_grass/history');
    } else if (tab === 'Varieties') {
      navigate('/lemon_grass/varieties');
    }
  };

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      {/* Add MiniBar with active tab as "Varieties" */}
      <MiniBar activeTab="Varieties" onTabClick={onTabClick} />

      <ContentSection animate={animate}>
        <Container>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            West Indian Lemon Grass (Cymbopogon citratus) and East Indian Lemon Grass or Cochin Lemon Grass (Cymbopogon flexuosus) are commonly grown varieties.
          </Typography>
          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cymbopogon citratus
          </Typography>
          <TextBox>
            <ImageContainer>
              <Image src="/Picture7.jpg" alt="Cymbopogon citratus" />
            </ImageContainer>
            <Typography variant="body1">
              Commonly called as “Sera” and largely used as a curry leaf in meat preparations. Plant exists as a small bush with long narrow leaves. “Sera” is also used in the oil distillation but the yield, as well as the quality of the oil, is comparatively lower than the lemongrass. The pseudostem is white in color and base of the plant has been formed to a bulb-like structure.
            </Typography>
          </TextBox>

          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cymbopogon flexuosus
          </Typography>
          <TextBox>
            <ImageContainer>
              <Image src="/Picture8.jpg" alt="Cymbopogon flexuosus" />
            </ImageContainer>
            <Typography variant="body1">
              It is the commercial lemongrass used in oil distillation. The plant is indigenous to India. Two species of C. flexuosus are reported based on the color of the plant. The pseudostem of C. flexuosus Choomana pullu is red in color. A bulk of the lemongrass oil is obtained from the red color type of Indian lemongrass. The other type is C. flexuosus forma albescens which have a greenish white or light red pseudostem. The quality of the white lemongrass oil is inferior to the red type variety.
            </Typography>
          </TextBox>
        </Container>
      </ContentSection>
    </div>
  );
};

export default Varieties;
// transition
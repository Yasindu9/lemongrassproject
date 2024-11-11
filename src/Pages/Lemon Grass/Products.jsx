import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import MiniBar from '../../Components/MiniBar'; // Import MiniBar component
import { useNavigate } from 'react-router-dom';

const ContentSection = styled(Box)(({ animate }) => ({
  backgroundColor: '#2E4C2E',
  color: '#FFFFFF',
  padding: '60px 20px',
  minHeight: '100vh',
  textAlign: 'justify',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  transform: animate ? 'translateY(0)' : 'translateY(50px)',
  opacity: animate ? 1 : 0,
  transition: 'transform 1.5s ease, opacity 1.5s ease',
}));

const TextBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  margin: '30px 0',
  flexWrap: 'wrap',
});

const ImageContainer = styled(Box)({
  width: '300px',
  height: '200px',
  marginRight: '20px',
  borderRadius: '4px',
  overflow: 'hidden',
  flexShrink: 0,
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SectionTitle = styled(Typography)({
  marginTop: '50px',
  fontWeight: 'bold',
});

const SectionText = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: '1.8',
  paddingLeft: '30px',
  borderLeft: '4px solid #CCCCCC',
  flex: 1,
});

const Products = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const onTabClick = (tab) => {
    if (tab === 'History') {
      navigate('/lemon_grass/history');
    } else if (tab === 'Varieties') {
      navigate('/lemon_grass/varieties');
    } else if (tab === 'Cultivation') {
      navigate('/lemon_grass/cultivation');
    } else if (tab === 'Products') {
      navigate('/lemon_grass/products');
    }
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <MiniBar activeTab="Products" onTabClick={onTabClick} />

      <ContentSection animate={animate}>
        <Container>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            There are four main forms of lemongrass products available in the market. These are fresh lemongrass, lemongrass powder, lemongrass flakes, and lemongrass oil.
          </Typography>
          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          {/* Fresh Lemongrass Section */}
          <SectionTitle variant="h6">Fresh lemongrass</SectionTitle>
          <TextBox>
            <ImageContainer>
              <Image src="/Picture12.jpg" alt="Fresh Lemongrass" />
            </ImageContainer>
            <SectionText>
              Commonly called as “Sera” and largely used as a curry leaf in meat preparations. Plant exists as a small bush with long narrow leaves. “Sera” is also used in the oil distillation but the yield, as well as the quality of the oil, is comparatively lower than the lemongrass. The pseudostem is white in color and base of the plant has been formed to a bulb-like structure.
            </SectionText>
          </TextBox>

          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          {/* Lemongrass Powder Section */}
          <SectionTitle variant="h6">Lemongrass powder</SectionTitle>
          <TextBox>
            <ImageContainer>
              <Image src="/Picture13.jpg" alt="Lemongrass Powder" />
            </ImageContainer>
            <SectionText>
              After grinding dehydrated lemongrass parts, lemongrass powder is produced. This powder is widely used as an ingredient in many curry powder recipes.
            </SectionText>
          </TextBox>

          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          {/* Lemongrass Flakes Section */}
          <SectionTitle variant="h6">Lemongrass flakes</SectionTitle>
          <TextBox>
            <ImageContainer>
              <Image src="/Picture14.jpg" alt="Lemongrass Flakes" />
            </ImageContainer>
            <SectionText>
              Lemongrass flakes are created by dehydrating and flaking lemongrass leaves. These flakes retain the flavor and aroma of lemongrass and are convenient for use in teas, soups, and various dishes.
            </SectionText>
          </TextBox>

          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          {/* Lemongrass Oil Section */}
          <SectionTitle variant="h6">Lemongrass oil</SectionTitle>
          <TextBox>
            <ImageContainer>
              <Image src="/Picture15.jpg" alt="Lemongrass Oil" />
            </ImageContainer>
            <SectionText>
              Lemongrass oil is extracted through steam distillation of lemongrass leaves and stems. It is widely used in aromatherapy, cosmetics, and as a natural insect repellent due to its distinct, pleasant fragrance and antibacterial properties.
            </SectionText>
          </TextBox>
        </Container>
      </ContentSection>
    </div>
  );
};

export default Products;

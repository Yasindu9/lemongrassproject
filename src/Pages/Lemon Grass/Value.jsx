import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import MiniBar from '../../Components/MiniBar';

// Content section with slide and fade effect for the entire component
const ContentSection = styled(Box)(({ animate }) => ({
  backgroundColor: '#2E4C2E',
  color: '#FFFFFF',
  padding: '80px 20px',
  minHeight: '100vh',
  textAlign: 'justify',
  display: 'flex',
  alignItems: 'center',
  transform: animate ? 'translateY(0)' : 'translateY(50px)', // Slide effect
  opacity: animate ? 1 : 0, // Fade effect
  transition: 'transform 0.8s ease, opacity 0.8s ease',
}));

const Title = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const TextBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  margin: '30px 0',
});

const TextContent = styled(Typography)({
  marginLeft: '20px',
  paddingLeft: '20px',
  borderLeft: '4px solid #CCCCCC',
  lineHeight: '1.8',
  fontSize: '1rem',
});

const Value = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <MiniBar activeTab="Value" />

      <ContentSection animate={animate}>
        <Container>
          <Title variant="h5">Composition of Lemongrass</Title>
          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          <TextBox>
            <TextContent>
              The major components in most lemongrass species include neral, isoneral, geranial, isogeranial, geraniol, geranyl acetate, citronellal, citronellol, germacrene-D, and elemol that makeup about 60–80% of lemongrass essential oil.
            </TextContent>
          </TextBox>

          <TextBox>
            <TextContent>
              This aldehyde monoterpene is the key active constituent of (&lt;80%) Cymbopogon flexuosus oil, making it an aldehyde-type grass. Alternatively, Cymbopogon martinii (Palmarosa) has more alcohol content (nerol and geraniol) than aldehydes (neral and geranial) and, thus, is called an alcohol-type grass.
            </TextContent>
          </TextBox>

          <TextBox>
            <TextContent>
              At the same time, Cymbopogon winterianus (Java citronella) is an intermediate type, due to the moderate contents of aldehyde and alcohol in its essential oil.
            </TextContent>
          </TextBox>

          <Title variant="h5">Benefits of Lemongrass According to Research</Title>
          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          <TextBox>
            <TextContent>
              Lemongrass is a versatile plant with various uses in traditional medicine, culinary arts, and other industries. In folk medicine, it has long been used to improve circulation, stabilize menstrual cycles, aid digestion, and enhance immunity.
            </TextContent>
          </TextBox>

          <TextBox>
            <TextContent>
              Beyond its culinary appeal, lemongrass is also valued in aromatherapy and perfumery and is used in producing perfumes, flavors, detergents, and pharmaceuticals. Its essential oil, rich in citral and other compounds like monoterpenes and sesquiterpenes, provides numerous health benefits, including antibacterial, anti-inflammatory, analgesic, antioxidant, antispasmodic, and sedative effects.
            </TextContent>
          </TextBox>
        </Container>
      </ContentSection>
    </div>
  );
};

export default Value;

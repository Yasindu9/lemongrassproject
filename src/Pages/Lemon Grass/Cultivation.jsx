import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import MiniBar from '../../Components/MiniBar'; // Import MiniBar component
import { useNavigate } from 'react-router-dom';

const ContentSection = styled(Box)(({ animate }) => ({
  backgroundColor: '#2E4C2E',
  color: '#FFFFFF',
  padding: '80px 20px',
  minHeight: '100vh',
  textAlign: 'justify',
  display: 'flex',
  alignItems: 'center',
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
  width: '100%',
  marginBottom: '20px',
  borderRadius: '4px',
  overflow: 'hidden',
});

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
});

const SectionTitle = styled(Typography)({
  marginTop: '50px', // Increased space between sections
  fontWeight: 'bold',
});

const SectionText = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: '1.8',
  paddingLeft: '30px',
  borderLeft: '4px solid #CCCCCC',
  flex: 1,
});

const Cultivation = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const onTabClick = (tab) => {
    if (tab === 'History') {
      navigate('/lemon_grass/history');
    } else if (tab === 'Varieties') {
      navigate('/lemon_grass/varieties');
    } else if (tab === 'Cultivation') {
      navigate('/lemon_grass/cultivation');
    }
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div>
      <MiniBar activeTab="Cultivation" onTabClick={onTabClick} />

      <ContentSection animate={animate}>
        <Container>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Cultivation
          </Typography>
          <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

          {/* Land Preparation Section */}
          <SectionTitle variant="h6">Land Preparation</SectionTitle>
          <SectionText>
            Land is prepared by ploughing, discing, and filling the soil several times. Termite treatment is important; during the last ploughing, 5% BHC Powder (25 Kg / Ha) should be mixed with the soil, followed by leveling.
          </SectionText>

          {/* Plantation Section */}
          <SectionTitle variant="h6">Plantation</SectionTitle>
          <SectionText>
          Plantation remains for the period of 4 to 5 years. Planting material is obtained by dividing the clumps from the old plantation; the divided units are called ‘Slips’. Before digging out the clumps, all the leaves should be removed 20-25 cm from the ground to minimize water loss from transpiration. Lengthy roots are trimmed and the dead leaves are removed from the slips to allow quick establishment of the slips in soil and to protect it from soil born insect and pests. Slips plantation is done on flat beds or ridges depending upon the texture of the soil. Slips are placed in holes of about 5-8 cm deep and the soil surrounding the slips is properly pressed and watering should be done. Plantation is done at 45 × 45 cm, 60 × 60 cm distance, however in areas with fairly large growing period planting distance may be increased to 70x70 cm or even 90 × 90 cm. Closer planting helps plantation to compete against weeds. The best time for planting is the onset of rains, in sub-tropical climates with assured irrigation, planting can also be done in the month of JanFeb, Feb-March, June-July. Due to control soil moisture, the percentage of crop establishment is more and the plants do not face weed competition, which is not uncommon with rainy season planting. A spacing of 30 cm × 30 cm with a plant density of 111 000/ha is recommended. A wider spacing of 60 cm × 45 cm for seedlings and 90 cm × 60 cm for slips has been recommended for fertile, irrigated land under North Indian conditions            </SectionText>

          <TextBox>
            <ImageContainer>
              <Image src="/Picture10.jpg" alt="Land Preparation and Plantation" />
            </ImageContainer>
          </TextBox>

          {/* Manures and Fertilizers Section */}
          <SectionTitle variant="h6">Manures and Fertilizers</SectionTitle>
          <SectionText>
          Lemon grass being leafy crop removes large amount of nutrients from the soil, therefore it is general practice to supply sufficient organic manures and fertilizers. The fertilizer requirement depends on the fertility of the soil and the climatic conditions. Before plantation, 10-15 Ton/ ha well decomposed FYM/compost and 100 Kg/ha is applied to the soil, second dose after every cutting near the roots of the plants. After plantation root treatment is done, 5 litres of water, 1 litre gomutra (cow urine) and 7.5 gms of bovistin should be applied. The fertilizer requirement 120 kg nitrogen, 40 kg of P2O5 and K2O / hector is optimum. The time of fertilizer application should be followed as under- half of nitrogen and full P2O5 and K2O at the time of plantation in first year and before hoeing and after rainfall in subsequent years, the remaining nitrogen should be applied in four equal splits after each harvest. In chromate overburdened soil, application of lime at 6 t/ha and fertilizer at 100 kg N, 50 kg P2O5 and 50 kg K2O/ha produced higher plant height, tiller number and herb yield of C. pendulus            </SectionText>

          {/* Weed Control Section */}
          <SectionTitle variant="h6">Weed Control</SectionTitle>
          <SectionText>
          Lemon grass is susceptible for weed competition for few months after plantation; the problem is more in rainy season. The plantation should be kept weed free for 60- 75 days, which is critical period for weed competition. Weeds can be managed by manual removal or by selective herbicides, Simazine 1.5 kg, Diuron 1kg or Oxyfluorfen 0.25 kg/ Ha applied pre planting in first year and after hoeing in subsequent years of growth. Application of organic mulch (citronella distillation waste) 5 tones/ ha, alone or in combination with herbicide has been found to be advantageous.          </SectionText>

          {/* Irrigation Section */}
          <SectionTitle variant="h6">Irrigation</SectionTitle>
          <SectionText>
          Lemon grass requires moist condition for good growth. In sub-tropical areas where rainy season lasts for 3-4 months, the crop requires regular irrigation during rain free period and 8-10 irrigations are considered to be sufficient to meet the water requirement. In areas of prolonged rainy season, the crop is cultivated as rain fed crop.           </SectionText>

          <TextBox>
            <ImageContainer>
              <Image src="/Picture11.jpg" alt="Irrigation and Cultivation" />
            </ImageContainer>
          </TextBox>

          {/* Diseases and Pests Section */}
          <SectionTitle variant="h6">Diseases and Pests</SectionTitle>
          <SectionText>
          There are two important diseases of Lemon grass, which affects the growth of plant and oil production, these are blight leaf and anthracnose. The causative organism of blight leaf is Curvularia andropogenis, the symptoms starts appearing in the month of July and August and continues till the month of October-November. The tips and margins of leaves turn brownish, in advanced stage major portion of leaf blade becomes browinish and leaf starts drying. Anthracose disease is caused by Colletotrichum graminicola, symptoms appear on leaves with brown spots which enlarge with age. Application of dithiocarbamate is recommended for control of the disease. No serious insects or pest grow on lemon grass, however plantation in north-eastern and southern parts are affected by steam borer which can be checked by application of Carbofuron 15 kg/ha.          </SectionText>

          {/* Harvesting Section */}
          <SectionTitle variant="h6">Harvesting</SectionTitle>
          <SectionText>
          First harvesting is done from newly established plantation from 4-5 months of plantation, after that the crop harvesting is done at the interval of 3-4 months. Thus minimum 3 and maximum 4 harvest are taken in a year. Some harvesters take 5 or more harvests in a year, but frequent cutting minimize longevity of the plantation and deteriorates the oil quality. Cutting can begin as soon as the nights dews have evaporated from the plants, as wet grass left for later distillation quickly ferments. Sunny days are preferable, since cloudy and misty conditions tend to depress leaf oil content have suggested first harvest at 75 days after planting, second at 120-130 days after first harvest and the third at150-160 days after second harvest. However first harvest can be taken at 90 days after planting and subsequent harvest at 50-55 days interval up to 5-6 years from the same crop reported five months for the citral content to reach a maximum for the first and the sixth harvest. During the first year of planting, three cuttings are obtained and subsequently 5-6 cuttings per year. The harvesting season begins in May and continues till the end of January. An herbage yield of 10-15 t/ha/harvest may be obtained. The herb yield of lemongrass differed significantly between years. The yield in the second year was significantly higher than that of the first, third, fourth and fifth year (Singh and, Singh 1998).          </SectionText>
        </Container>
      </ContentSection>
    </div>
  );
};

export default Cultivation;

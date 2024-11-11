import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ContentSection = styled(Box)(({ animate }) => ({
  backgroundColor: '#2E4C2E',
  color: '#FFFFFF',
  padding: '80px 20px',
  minHeight: '70vh',
  textAlign: 'justify',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  transform: animate ? 'translateY(0)' : 'translateY(50px)',
  opacity: animate ? 1 : 0,
  transition: 'transform 0.8s ease, opacity 0.8s ease',
}));

const Subtitle = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  margin: '50px 0',
  textAlign: 'center',
  color: '#FFFFFF',
});

const DescriptionText = styled(Typography)({
  fontSize: '1rem',
  lineHeight: '1.8',
  marginBottom: '20px',
});

const ImageRow = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '120px',
  marginBottom: '50px',
});

const ImageContainer = styled(Box)(({ animate }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  transform: animate ? 'scale(1.05)' : 'scale(1)',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const DividerLine = styled('hr')({
  width: '100%',
  border: '0',
  borderTop: '2px solid white',
  margin: '40px 0',
});

const Visits = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <ContentSection animate={animate}>
      <Container>
        <Subtitle variant="h4">Small Scale Cultivation</Subtitle>
        
        <ImageRow>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture17.jpg`} alt="Small scale cultivation" />
          </ImageContainer>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture19.jpg`} alt="Visit with farmers" />
          </ImageContainer>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture20.jpg`} alt="Lemongrass field" />
          </ImageContainer>
        </ImageRow>
        
        <DescriptionText>
          <ul>
            <li>Mr. Nimal’s cultivation land in Panvila, Kandy district</li>
            <li>This is a household-scale cultivation land mainly grown for household purposes.</li>
            <li>Cultivation procedures were simple</li>
            <li>No land preparation is needed</li>
            <li>
              Regular watering was not needed; rainwater was sufficient. This is because Panvila is located in the wet zone of the country, where good rain is usually present. Yet, if cultivated in the dry zone, watering is needed.
            </li>
            <li>There is less demand for lemongrass as this is not a common ingredient used in Sri Lankan dishes</li>
            <li>Several problems were encountered:</li>
          </ul>
          <ol>
            <li>The low demand for Lemongrass did not motivate household-scale farmers like Mr. Nimal to expand their cultivation.</li>
            <li>The Lemongrass shrubs provide a good breeding place for mice, which increases its predators like snakes.</li>
          </ol>
        </DescriptionText>

        <DividerLine />

        <Subtitle variant="h4">Department of Export Agriculture</Subtitle>
        
        <ImageRow>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture21.jpg`} alt="Department of Export Agriculture" />
          </ImageContainer>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture22.jpg`} alt="Visit with Department team" />
          </ImageContainer>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture23.jpg`} alt="Export Agriculture field" />
          </ImageContainer>
        </ImageRow>
        
        <DescriptionText>
          <ul>
            <li>Department of Export Agriculture, Gatambe</li>
            <li>We were able to get exposure to the 14 types of export crops and the place Lemongrass holds in the industry</li>
            <li>We received access to the official WhatsApp groups which consisted of a collection of Lemongrass farmers, producers, and also exporters</li>
            <li>We arranged our next visit to the oil extraction laboratory located in the National Spice Garden Matale, also through the Department of Export Agriculture</li>
          </ul>
        </DescriptionText>

        <DividerLine />

        <Subtitle>National Spice Garden Matale, Sri Lanka</Subtitle>

        <ImageRow>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture24.jpg`} alt="Spice Garden 1" />
          </ImageContainer>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture25.jpg`} alt="Spice Garden 2" />
          </ImageContainer>
          <ImageContainer animate={animate}>
            <Image src={`${process.env.PUBLIC_URL}/Picture26.jpg`} alt="Spice Garden 3" />
          </ImageContainer>
        </ImageRow>

        <DescriptionText>
          <p>The pioneer market of Lemongrass is India. Lemongrass does not have a long history. First, India introduced the lemongrass market in 1800-1880. In the years 2005 and 2006, the biggest market was recorded.</p>
          <p>Lemongrass includes Cymbopogon family and there are lots of varieties including citronella plants. Under Cymbopogon family, Cymbopogon nadus and Cymbopogon vintarianus are citronella types. And then under lemongrass category, West Indian lemongrass [Cymbopogon citratus] and East Indian lemongrass [Cymbopogon flexuosus] are the main two types of varieties which are grown in Sri Lanka. </p>
          <ul>
            <li>Cymbopogon citratus – For consumption</li>
            <li>Cymbopogon flexuosus – For oil extraction</li>
          </ul>
          <p>The main difference between the two varieties is, the West Indian type has a pale color bulb and the East Indian type has a purple color bulb at the bottom of its sucker. </p>
          <p>Environmental adaptability: There is no unique environmental factors to grow lemongrass and no any fertilizer requirements.</p>
          <p>Cultivation and harvesting: Cultivate through suckers. Cultivation space for single plant [ 60 cm × 60 cm]. Space between two plant rows [ 1.5 ft ]. After 2-3 years, flowering is happened and after that, lemongrass can be harvested twice a year. Especially, in order to oil extraction purpose, the leaves of lemongrass should be cut before the flowering stage. </p>
          <p>Compare to Cymbopogon nadus, Cymbopogon flexuosus has a higher oil extraction rate. </p>
          <p>Export Market:</p>
          <ul>
            <li>Mainly dried lemongrass flakes and powder are exported in negligible amounts.</li>
            <li>And also, a value added herbal tea is exported.</li>
            <li>The fresh material [leaves] is exported to Pakistan, Maldives and Dubai like countries </li>
          </ul>
          <p>Through its citrus flavor, lemongrass can be used as an alternative to lime and lemon.</p>
          <p>Lemongrass is mainly used for non-food product development, such as cosmetics and insect repellents.</p>
          <p>At the cultivation process, most time lemongrass is used to soil rehabilitation. As an example, in order to mitigate nematode invasion in tea plantation, lemongrass is applied as an inter crop. </p>
          <p>Problems associated in lemongrass cultivation.</p>
          <ul>
            <li>There is no any specific product which is produced by lemongrass for the open market.</li>
            <li>As same, no any good market in local market.</li>
            <li>There is no any target production if presence, no any programs. </li>
            <li>The government reserved money only for household level lemongrass farmers. In order to overcome this problem, national policies can be developed for underutilized landscapes. </li>
            <li>When producing lemongrass herbal tea, those lemongrass  is imported from German like countries and not use local lemongrass because same bulk density cannot obtain by using our lemongrass. </li>
          </ul>
        </DescriptionText>

        {/* <DividerLine /> */}

        <Subtitle>Oil Extraction Research Laboratory, Matale</Subtitle>
        
        <DescriptionText>
          <p>For oil processing and extraction, Cymbopogon flexuosus is used. </p>
          <p>Value added producers are extracted lemongrass oil from distilleries in Sri Lankan companies.</p>
          <p>There are 03 types of methods to oil extraction. </p>
          <ol>
            <li>Water distillation (Laboratory method)</li>
            <li>Water incorporated steam distillation</li>
            <li>Steam distillation</li>
          </ol>
          <p>Commercially most frequently used method is steam distillation.</p>
          <p>Apart from that, coal extraction and microwave extraction are another exceptional methods to lemongrass oil extraction. </p>
          <p>After harvesting, the leaves are wilted for 2 to 3 days until they become pale yellow color. The moisture content should be 20% - 30% for oil extraction.</p>
          <p>For 50g of leaves, 1% oil percentage can be obtained from the laboratory level. But when extract commercial level, the extraction rate is normally 0.7% - 0.8%.</p>
          <p>Problems in lemongrass oil extracting in Sri Lanka</p>
          <ul>
            <li>In Sri Lanka, oil processing and extraction is not much popular. Most of local buyers import the lemongrass oil they want.</li>
            <li>The labor cost is very high and farmers need big sensation. </li>
            <li>Another main problem is cost-effective yield is minimal. [ In order to extract 1kg oil yield, 100 leaves are required]. But when it comes to the commercial level , the oil yield decreases to 800g.</li>
            <li>The price also low in the market. </li>
          </ul>
        </DescriptionText>

        <DividerLine />

        <Subtitle>Water distillation unit (Laboratory method)</Subtitle>

<ImageRow>
  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture27.jpg`} alt="Spice Garden 1" />
  </ImageContainer>
  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture28.jpg`} alt="Spice Garden 2" />
  </ImageContainer>
  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture29.jpg`} alt="Spice Garden 3" />
  </ImageContainer>
  {/* <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture30.jpg`} alt="Spice Garden 4" />
  </ImageContainer> */}
</ImageRow>

<DividerLine />


<Subtitle>Steam distillation unit</Subtitle>

<ImageRow>

  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture30.jpg`} alt="Spice Garden 4" />
  </ImageContainer>
</ImageRow>
<DividerLine />

<Subtitle>Anuradhapura cultivation</Subtitle>

<ImageRow>

  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture31.jpg`} alt="Spice Garden 4" />
  </ImageContainer>
  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture32.jpg`} alt="Spice Garden 4" />
  </ImageContainer>
</ImageRow>

<DescriptionText>
    <p>We visited large-scale lemongrass cultivation on the 06th of July 2024 in Saliyapura, Anuradhapura district owned by Mr. Saranga. The land of cultivation is about 20 perches. We had the opportunity to observe the growth and maintenance techniques used in the farming of lemongrass. </p>
        <p>The land was separated into small parts according to the time lemongrass plants were planted. We observed plants that were planted before 2 weeks, 3 months, 6 months, and 9 months. Mr. Saranga informed us lemongrass plants are ready to harvest after 9 months. We observed the sprinkler irrigation method he used to water the plants effectively. Moreover, he informed us he provides plants for people who are starting their own cultivations and a part of the harvest will be sent for the powder production. Mr. Saranga informed us that he grows lemongrass as a main crop and he does not apply any fertilizer or follow any guidance from the government</p> 
          <p>Problems observed</p>
          <ul>
            <li>Lack of access to the market</li>
            <p>-	limited access to markets and fair pricing, which can affect the farmers’ income and investment in cultivation.</p>
            <li>Having export barriers</li>
            <p>-	Regulations and quality standards in international markets pose challenges for exporters, affecting the overall profitability of lemongrass cultivation.</p>
            <li>Lack of guidance from the government</li>
            <p>-	We observed a lack of connection between the farmers and the government in providing incentives and instructions for the management of cultivation.</p>
            <li>Lack of awareness of people </li>
            <p>-	Lemongrass is easily maintained and can be grown anywhere. However, the people of Sri Lanka seem to be less familiar with the benefits.</p>
            <li>Production of synthetic lemongrass oil  </li>
            <li>Expensive oil extraction process  </li>
            <p>-	In commercial extraction, an advanced procedure is used. So the cost of production is high while the quantity of output is less. </p>
          </ul>
        </DescriptionText>
        <DividerLine />
        <Subtitle>Saviru Spices & Natural (Pvt) Ltd</Subtitle>
        <ImageRow>

  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture33.jpg`} alt="Spice Garden 4" />
  </ImageContainer>
  <ImageContainer animate={animate}>
    <Image src={`${process.env.PUBLIC_URL}/Picture34.jpg`} alt="Spice Garden 4" />
  </ImageContainer>
</ImageRow>

<DescriptionText>
    <p>Saviru Spices & Natural (Pvt) Ltd offers the finest Ceylon spices and natural foods. It is rooted in quality, sustainability, and women’s empowerment. Since 2017, it has proudly supported local communities and delivered excellence. Saviru Products manufactures herbal tea that incorporates lemongrass with cinnamon. The raw materials for the products are supplied by the local suppliers who are growing lemongrass as a cultivation and the local market is the targeted market of this value-added product. Saviru Products uses the best technology in drying, sorting, and processing of lemongrass while maintaining the quality of the product. The herbal tea has an emerging audience in the market due to the health benefits and high quality of the product. Saviru products also produce roasted curry powder and meat curry mixture which has lemongrass as an ingredient. This product has a relatively good market due to its premium quality and exquisite taste. The processing of lemongrass is done by professionals who are experts in both knowledge and experience. Moreover, Saviru Products adheres to the highest quality standards, including: </p>
        
         
          <ul>
         
            <li>ISO 22000 certification </li>
            <li>HACCP compliance</li>
            <li>EU organic standards </li>
            </ul>
        </DescriptionText>

        <DividerLine />

      </Container>
    </ContentSection>
  );
};

export default Visits;

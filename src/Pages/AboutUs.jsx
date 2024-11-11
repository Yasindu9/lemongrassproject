import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

const AboutSection = styled(Box)(({ animate }) => ({
    backgroundColor: '#2E4C2E', // Dark green background
    color: '#FFFFFF',
    minHeight: '100vh',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(30px)',
    transition: 'transform 0.8s ease, opacity 0.8s ease', // Animation similar to History.jsx
}));

const CircleImage = styled('img')({
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '30px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.20)', // Hover animation for the image
    },
});

const SectionText = styled(Typography)({
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'justify',
});

const AboutUs = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <AboutSection animate={animate}>
            <Container maxWidth="md">
                {/* Image with hover effect */}
                <CircleImage src={`${process.env.PUBLIC_URL}/AboutUs.jpg`} alt="Team" />

                {/* About Us Title */}
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                    About Us
                </Typography>

                <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

                {/* About Us Content */}
                <SectionText>
                    We are second-year undergraduates from the Faculty of Agriculture, University of Peradeniya, who share a mutual interest in sustainable agriculture and community empowerment. This web HTML was designed as an A to Z guide about cultivation—from the very methods of planting to the product-related benefits accrued from farming lemongrass. We would want to encourage people to grow lemongrass or at least support already operating lemongrass farmers by providing very accessible information on its environmental and economic benefits.
                </SectionText>

                <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

                <SectionText>
                    Our platform is an end-to-end facility to acquire information on the following:
                    <ul>
                        <li>Lemongrass cultivation techniques and best practices</li>
                        <li>Economic viability of handling lemongrass products</li>
                        <li>Tips to handle lemongrass by farmers in a sustainable manner and finding its market</li>
                    </ul>
                    Our Objectives:
                    <ul>
                        <li>Educate users about the eco-friendly and profitable aspects of lemongrass.</li>
                        <li>Cultivate knowledge for lemongrass farmers in areas concerning method and technology application and market opportunities.</li>
                        <li>Engage communities in sustainable agriculture through lemongrass as a crop.</li>
                    </ul>
                </SectionText>

                <Divider sx={{ my: 3, backgroundColor: '#FFFFFF' }} />

                <SectionText>
                    For further information or inquiries, please contact us at:
                    <ul>
                        <li>Email: lemongrassproject@gmail.com</li>
                        <li>Phone: +94 0772345678</li>
                    </ul>
                    We are here to assist and inspire anyone interested in lemongrass cultivation!
                </SectionText>
            </Container>
        </AboutSection>
    );
};

export default AboutUs;

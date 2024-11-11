import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, TextField, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
  padding: theme.spacing(4),
}));

const FormSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#2E4C2E',
  color: '#FFFFFF',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
  textAlign: 'center',
  flex: '1 1 50%',
}));

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const FormTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'center',
});

const InputField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#000000',
    color: '#00BFFF',
  },
  '& .MuiOutlinedInput-root': {
    borderColor: '#00BFFF',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#00BFFF',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#00BFFF',
  },
  '& label.Mui-focused': {
    color: '#00BFFF',
  },
  '& .MuiInputBase-input': {
    color: '#00BFFF',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#00BFFF',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#00BFFF',
  border: `2px solid #00BFFF`,
  '&:hover': {
    backgroundColor: '#00BFFF',
    color: '#000000',
  },
  padding: theme.spacing(1.5),
  transition: 'all 0.3s ease',
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedBack: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_o7p78in', 'template_2a8mdrk', formData, '5o0p7cNhiuxLpCoKe' )
      .then(
        (response) => {
          console.log(response);
          alert('Feedback sent successfully!');
        },
        (error) => {
          console.error(error);
          alert('Failed to send Feedback, please try again.');
        }
      );

    setFormData({
      name: '',
      email: '',
      feedBack: '',
    });
  };

  return (
    <FormContainer>
      <FormSection>
        <FormTitle>Contact</FormTitle>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Let's Work Together
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          I'd love to hear from you! Whether you have a project in mind or just
          want to say hello, feel free to reach out using this form.
        </Typography>
      </FormSection>
      <FormSection>
        <Form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
            placeholder="Your Name"
            fullWidth
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
            placeholder="Your Email"
            fullWidth
          />
          <InputField
            label="Feedback"
            name="feedBack"
            value={formData.feedBack}
            onChange={handleChange}
            variant="outlined"
            required
            multiline
            rows={4}
            placeholder="Your Feedback"
            fullWidth
          />
          <Box textAlign="center">
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Box>
        </Form>
      </FormSection>
    </FormContainer>
  );
};

export default ContactForm;

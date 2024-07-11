import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Chainsaw
        </Typography>
        <Typography variant="body1">
          Chainsaw is dedicated to providing high-quality gardening equipment. Our mission is to make gardening easy and enjoyable for everyone.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;

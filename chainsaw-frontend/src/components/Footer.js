import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', padding: '20px 0', backgroundColor: '#f8f8f8' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Chainsaw. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;

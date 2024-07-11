import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Chainsaw
        </Typography>
        <ProductList />
      </Box>
    </Container>
  );
}

export default Home;

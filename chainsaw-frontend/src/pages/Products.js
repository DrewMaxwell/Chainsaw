import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProductList from '../components/ProductList';

const Products = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Products
        </Typography>
        <ProductList />
      </Box>
    </Container>
  );
}

export default Products;

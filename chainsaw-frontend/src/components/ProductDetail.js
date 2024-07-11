import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h3" component="h1">{product.name}</Typography>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
      <Typography variant="h5">${product.price}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Button variant="contained" color="primary">Add to Cart</Button>
    </Container>
  );
}

export default ProductDetail;

const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Get all orders
router.get('/', async (req, res) => {
  const orders = await Order.find().populate('user').populate('products.product');
  res.json(orders);
});

// Create a new order
router.post('/', async (req, res) => {
  const newOrder = new Order(req.body);
  const savedOrder = await newOrder.save();
  res.json(savedOrder);
});

module.exports = router;

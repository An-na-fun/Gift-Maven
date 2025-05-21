// server/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;



// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static('public/images'));


// Test route
app.get('/', (req, res) => {
  res.send('Gift-Maven server is running!');
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

const products = require('./data/products.js'); // Add this line

// API endpoint to get products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// ...existing code...

// API endpoint to get featured products (e.g., first 4)
app.get('/api/featured-products', (req, res) => {
  const featured = products.slice(0, 6); // Adjust as needed
  res.json(featured);
});

// ...existing code...

// API endpoint to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// API endpoint to get categories
const categories = require('./data/categories.js'); // Add this line
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

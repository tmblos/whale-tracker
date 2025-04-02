const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data
const investments = [
  {
    investor: "Warren Buffett",
    stock: "Apple Inc.",
    type: "BUY",
    amount: "$234,000,000",
    date: "2025-03-15"
  },
  {
    investor: "BlackRock",
    stock: "Microsoft",
    type: "BUY",
    amount: "$198,500,000",
    date: "2025-03-10"
  },
  {
    investor: "Vanguard Group",
    stock: "Amazon",
    type: "SELL",
    amount: "$176,200,000",
    date: "2025-03-18"
  },
  {
    investor: "Cathie Wood",
    stock: "Tesla",
    type: "BUY",
    amount: "$87,300,000",
    date: "2025-03-22"
  },
  {
    investor: "Ray Dalio",
    stock: "Alphabet",
    type: "SELL",
    amount: "$124,800,000",
    date: "2025-03-12"
  }
];

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/investments', (req, res) => {
  res.json(investments);
});

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Whale Tracker API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
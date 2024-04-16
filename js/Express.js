const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

// Endpoint to get the API key
app.get('/api/config', (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

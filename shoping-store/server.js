const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let cartItems = []; 


app.post('/api/checkout', (req, res) => {
  const { cart } = req.body;
  cartItems = [];
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

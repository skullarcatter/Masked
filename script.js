const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/proxy', async (req, res) => {
  const url = req.query.url;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from the target website.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

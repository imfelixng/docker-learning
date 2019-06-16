const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello abc');
})

app.listen(8080, () => console.log('Server is running at port 8080'))
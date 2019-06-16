const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visit is ' + visits)
    client.set('visits', +visits + 1);
  });
});

app.listen(8081, () => console.log('Server is running at ' + 8081))
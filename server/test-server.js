// filepath: /Users/funmilayo/Desktop/Gift-Maven/Project/server/test-server.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello!'));
app.listen(5050, () => console.log('Listening on 5000'));
const express = require('express');
const http = require('http');
const app = express();
const router = require('./router');
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('combined'));
app.use(cors());

router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Node up on', port);

module.exports = app;
'use strict';
const express = require('express');
// const path = require('path');
const PORT = process.env.PORT || 3002;

const app = express();

app.use('/static', express.static('assets'));
app.use('/images', express.static('images'));
app.use('/assets', express.static('base'));
app.use('/', express.static('public'));


app.get('/', (req, res) => {
  res.send('hello')
})

  // app.set('views', path.join(__dirname, 'views'))
app.set('view engine')
// app.get('/', (req, res) => res.serve('index'))
  






app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
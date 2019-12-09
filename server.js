'use strict';

// const express = require('express');
// const app = express();

// app.use(express.static('./public'));

// app.get('/webpage', function(request, response){
//   response.sendFile(__dirname + 'index.html');
// });


// const PORT = process.env.PORT || 3000;

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
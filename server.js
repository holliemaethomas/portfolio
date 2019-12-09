'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/webpage', function(request, response){
  response.sendFile(__dirname + '/public/index.html');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('great job nicholas, you started a server on port 3000');
});
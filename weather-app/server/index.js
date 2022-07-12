const express = require('express');
const path = require('path');

const app = express();

const joined = path.join(__dirname, 'public');


const expressStatic = express.static(joined);

app.use(expressStatic);
app.use(express.json());

// app.get(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)




app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening');
});

=79996d5b5fa0f00d97c7045ae7fa813e


https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=627737b1b2bf5363884b298593e775f1

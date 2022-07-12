const express = require('express');
const path = require('path');

const app = express();

const joined = path.join(__dirname, 'public');


const expressStatic = express.static(joined);

app.use(expressStatic);
app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening');
});

var parseString = require('xml2js').parseString();
const fs = require('fs');

const xmlData = fs.readFile('./xmldata.xml', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

parseString(xmlData, (err, result) => {
  console.log(result);
})

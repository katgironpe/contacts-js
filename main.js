let path = require('path');
let express = require('express');
let app = express();

let htmlPath = path.join(__dirname, './');

app.use(express.static(htmlPath));

let server = app.listen(5000, function () {
  let host = 'localhost';
  let port = server.address().port;
  console.log(`listening on http://${host}:${port}/`);
});

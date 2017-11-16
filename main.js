let path = require('path');
let express = require('express');
let app = express();

let htmlPath = path.join(__dirname, './');

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});
app.use(express.static(htmlPath));

app.listen(app.get('port'), function() {
  console.log('The app is running on port', app.get('port'));
});

const express = require('express')
const app = express()
var path = require('path');


app.use(express.static('client'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(8080);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

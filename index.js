var express = require('express');
var app = express();
app.get('/contact', function (req, res) {
    res.send('Hello World!!!')
});
app.listen(3000, function () {
    console.log('Example 3 app listening on port 3000!');

});
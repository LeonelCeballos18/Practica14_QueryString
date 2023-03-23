const express = require('express')
const app = express()
let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html><html lang="en"><head><link href=/assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>`)
})

app.get('/person/:id', function (req,res) {
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr, Message: req.query.message, Times: req.query.times});
}); 

app.listen(port)
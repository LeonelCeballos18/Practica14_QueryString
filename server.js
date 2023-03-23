const express = require('express') //Inyeccion de la dependencia
const app = express()
let port = process.env.PORT || 3000; //Definicion del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //Contenido estatico
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html><html lang="en"><head><link href=/assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>`)
})

app.get('/person/:id', function (req,res) { //Render de la vista person a traves de el string que se pasa en el url
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr, Message: req.query.message, Times: req.query.times});
}); 

app.listen(port)
// importamos las dependencias
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// declaramos app
const app = express();

// le indicamos a app que use ciertas dependencias
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// declaramos router
const router = express.Router();

// le pasamos parametros a router
router.get('/', function (req, res) {
  res.send('Hello World')
});

// le indicamos a app que use router y se lo pasamos como argumento
app.use(router);

// declaramos el puerto
app.listen(3000, function () {
  console.log('Corriendo en el puerto http://localhost:3000')
})

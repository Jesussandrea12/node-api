// importamos las dependencias
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();

// import models and controllers
const models = require('./models/user')(app, mongoose);
const UserCtrl = require('./controllers/users');

// le indicamos a app que use ciertas dependencias | middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// test 'hello world'
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World')
});
app.use(router);

// API routes
const users = express.Router();

users.route('/users')
  .get(UserCtrl.findAllUsers)
  .post(UserCtrl.addUser);

users.route('/users/:id')
  .get(UserCtrl.findById)
  .put(UserCtrl.updateUser)
  .delete(UserCtrl.deleteUser);

app.use('/api', users);

// nos conectamos a la DB y declaramos el puerto
mongoose.connect('mongodb://localhost/users', (err, res) => {
  if(err) console.log(`ERROR: connecting to Database. ${err}`);
  else console.log('Connected to DB')

  app.listen(3000, () => {
    console.log("Node server running on http://localhost:3000");
  });
});

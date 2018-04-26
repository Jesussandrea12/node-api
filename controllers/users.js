const mongoose = require('mongoose');
const User = mongoose.model('User');

// GET all users in DB
exports.findAllUsers = (req, res) => {
  User.find((err, users) => {
    if (err) err.send(500, err.message);

    console.log('GET /users')
    res.status(200).jsonp(users);
  });
};

//GET - Return a user with specified ID
exports.findById = (req, res) => {
	User.findById(req.params.id, (err, user) => {
    if(err) return res.send(500, err.message);

    console.log('GET /user/' + req.params.id);
		res.status(200).jsonp(user);
	});
};

//POST - Insert a new user in the DB
exports.addUser = (req, res) => {
	console.log('POST');
	console.log(req.body);

	const user = new User({
    id:         req.body.id,
    name:       req.body.name,
    last_name:  req.body.last_name,
    address:    req.body.address,
    city:       req.body.city,
    state:      req.body.state,
    country:    req.body.country,
    phone:      req.body.phone,
    area_code:  req.body.area_code,
    birthdate:  req.body.birthdate
	});

	user.save((err, user) => {
		if(err) return res.status(500).send(err.message);
    res.status(200).jsonp(user);
	});
};

//PUT - Update a register already exists
exports.updateUser = (req, res) => {
	User.findById(req.params.id, (err, user) => {
    user.id        =  req.body.id;
    user.name      =  req.body.name;
    user.last_name =  req.body.last_name;
    user.address   =  req.body.address;
    user.city      =  req.body.city;
    user.state     =  req.body.state;
    user.country   =  req.body.country;
    user.phone     =  req.body.phone;
    user.area_code =  req.body.area_code;
    user.birthdate =  req.body.birthdate;

		user.save((err) => {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(user);
		});
	});
};

//DELETE - Delete a user with specified ID
exports.deleteUser = (req, res) => {
	User.findById(req.params.id, (err, user) => {
		user.remove((err) => {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};

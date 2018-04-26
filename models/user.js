// importamos las dependencias
const mongoose = require('mongoose');

// exportamos
exports = module.exports = (app, mongoose) => {
  // declaramos el user schema
	const userSchema = new mongoose.Schema ({
    id:         { type: Number },
    name:       { type: String },
    last_name:  { type: String },
    address:    { type: String },
    city:       { type: String },
    state:      { type: String },
    country:    { type: String },
    phone:      { type: String },
    area_code:  { type: String },
    birthdate:  { type: Date }
	});
	mongoose.model('User', userSchema);
};

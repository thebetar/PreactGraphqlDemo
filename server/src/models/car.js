const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
	Brand: { type: String },
	Model: { type: String },
	Generation: { type: String },
	Modification_Engine: { type: String },
	Doors: { type: String },
	Power: { type: String },
	Maximum_Speed: { type: String },
	Acceleration: { type: String },
	Year_Introduced: { type: String },
	Carroserie: { type: String },
	Seats: { type: String },
	Engine_Position: { type: String },
	Displacement: { type: String },
	Torque: { type: String }
});

const CarModel = mongoose.model('cars', CarSchema);

module.exports = CarModel;

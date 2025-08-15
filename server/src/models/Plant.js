const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, index: true },
		description: { type: String },
		care: {
			watering: { type: String },
			soil: { type: String },
			sunlight: { type: String },
			fertilizer: { type: String },
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Plant', PlantSchema);
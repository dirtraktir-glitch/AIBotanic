const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true, index: true },
		name: { type: String },
		geo: {
			lat: Number,
			lng: Number,
		},
		soilType: { type: String },
		provider: { type: String },
		uid: { type: String, index: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
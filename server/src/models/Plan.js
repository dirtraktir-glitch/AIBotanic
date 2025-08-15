const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema(
	{
		layout: { type: Object, required: true },
		meta: { type: Object },
		userId: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Plan', PlanSchema);
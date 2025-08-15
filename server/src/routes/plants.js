const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

router.get('/', async (req, res, next) => {
	try {
		const plants = await Plant.find().limit(500).lean();
		res.json({ plants });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
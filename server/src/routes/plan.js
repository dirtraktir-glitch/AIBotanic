const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');
const { recommendPlanting } = require('../utils/planner');

router.post('/', async (req, res, next) => {
	try {
		const { layout, meta } = req.body || {};

		let recommendations = null;
		if (meta?.autoRecommend) {
			recommendations = await recommendPlanting({ plants: meta.plants, location: meta.location });
		}

		const plan = await Plan.create({ layout: layout || recommendations?.layout || [], meta: { ...(meta || {}), recommendations } });
		res.status(201).json({ plan });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
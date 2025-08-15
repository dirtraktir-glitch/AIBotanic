const express = require('express');
const router = express.Router();
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

router.post('/', async (req, res, next) => {
	try {
		const { imageBase64 } = req.body || {};
		if (!imageBase64) return res.status(400).json({ error: 'imageBase64 is required' });

		const [result] = await client.annotateImage({
			image: { content: imageBase64 },
			features: [
				{ type: 'LABEL_DETECTION', maxResults: 10 },
				{ type: 'WEB_DETECTION', maxResults: 10 },
				{ type: 'IMAGE_PROPERTIES' },
			],
		});

		return res.json({ analysis: result });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
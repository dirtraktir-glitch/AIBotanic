const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
const templates = require('../templates/faq.json');

function getOpenAI() {
	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey) return null;
	return new OpenAI({ apiKey });
}

router.post('/', async (req, res, next) => {
	try {
		const { message, context } = req.body || {};
		if (!message) return res.status(400).json({ error: 'message is required' });

		const lower = String(message).toLowerCase();
		const templateKey = Object.keys(templates).find((k) => lower.includes(k));
		if (templateKey) {
			return res.json({ source: 'template', reply: templates[templateKey] });
		}

		const openai = getOpenAI();
		if (!openai) {
			return res.status(503).json({ error: 'OpenAI is not configured' });
		}

		const systemPrompt = `You are a gardening assistant. Answer concisely. Context: ${JSON.stringify(context || {})}`;
		const completion = await openai.chat.completions.create({
			model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
			messages: [
				{ role: 'system', content: systemPrompt },
				{ role: 'user', content: message },
			],
			temperature: 0.3,
		});

		const reply = completion.choices?.[0]?.message?.content ?? '';
		return res.json({ source: 'openai', reply });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
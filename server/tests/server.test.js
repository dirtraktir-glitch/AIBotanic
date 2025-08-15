const request = require('supertest');
const { app } = require('../src/server');

jest.mock('../src/utils/authMiddleware', () => ({
	optional: (_req, _res, next) => next(),
	required: (_req, _res, next) => next(),
}));

jest.mock('../src/models/Plant', () => ({
	find: () => ({ limit: () => ({ lean: async () => [{ name: 'Tomato' }] }) }),
}));

jest.mock('../src/models/Plan', () => ({
	create: async (doc) => ({ _id: '1', ...doc }),
}));

describe('API', () => {
	it('GET /health ok', async () => {
		const res = await request(app).get('/health');
		expect(res.status).toBe(200);
		expect(res.body.ok).toBe(true);
	});

	it('POST /chat returns template', async () => {
		const res = await request(app).post('/chat').send({ message: 'как поливать?' });
		expect(res.status).toBe(200);
		expect(res.body.source).toBe('template');
		expect(typeof res.body.reply).toBe('string');
	});

	it('GET /plants returns stubbed list', async () => {
		const res = await request(app).get('/plants');
		expect(res.status).toBe(200);
		expect(Array.isArray(res.body.plants)).toBe(true);
	});

	it('POST /plan creates plan', async () => {
		const res = await request(app)
			.post('/plan')
			.set('Authorization', 'Bearer test')
			.send({ layout: [{ x: 0, y: 0, plant: 'Tomato' }], meta: {} });
		expect(res.status).toBe(201);
		expect(res.body.plan).toBeTruthy();
	});
});
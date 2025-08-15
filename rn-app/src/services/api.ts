import axios from 'axios';

const api = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000',
	timeout: 10000,
});

export const chat = async (message: string, context?: unknown) => {
	const res = await api.post('/chat', { message, context });
	return res.data;
};

export const analyzeImage = async (imageBase64: string, idToken: string) => {
	const res = await api.post(
		'/analyze-image',
		{ imageBase64 },
		{ headers: { Authorization: `Bearer ${idToken}` } }
	);
	return res.data;
};

export const getPlants = async () => {
	const res = await api.get('/plants');
	return res.data.plants;
};

export const savePlan = async (layout: unknown, meta: unknown, idToken: string) => {
	const res = await api.post(
		'/plan',
		{ layout, meta },
		{ headers: { Authorization: `Bearer ${idToken}` } }
	);
	return res.data.plan;
};

export default api;
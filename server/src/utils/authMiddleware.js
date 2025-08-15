const admin = require('firebase-admin');

try {
	if (!admin.apps.length) {
		admin.initializeApp({
			credential: admin.credential.applicationDefault(),
		});
	}
} catch (e) {
	// Firebase may be missing in local dev; endpoints with optional auth should still work
}

async function verifyToken(token) {
	if (!token) return null;
	try {
		const decoded = await admin.auth().verifyIdToken(token);
		return decoded;
	} catch (e) {
		return null;
	}
}

const optional = async (req, _res, next) => {
	const auth = req.headers.authorization || '';
	const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
	req.user = await verifyToken(token);
	next();
};

const required = async (req, res, next) => {
	const auth = req.headers.authorization || '';
	const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
	const user = await verifyToken(token);
	if (!user) return res.status(401).json({ error: 'Unauthorized' });
	req.user = user;
	next();
};

module.exports = { optional, required };
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const winston = require('winston');
const expressWinston = require('express-winston');

const chatRoutes = require('./routes/chat');
const visionRoutes = require('./routes/vision');
const plantsRoutes = require('./routes/plants');
const planRoutes = require('./routes/plan');
const authMiddleware = require('./utils/authMiddleware');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use(
	expressWinston.logger({
		transports: [new winston.transports.Console()],
		format: winston.format.combine(
			winston.format.colorize(),
			winston.format.timestamp(),
			winston.format.printf(({ timestamp, level, message, meta }) => {
				return `${timestamp} [${level}] ${message} ${meta ? JSON.stringify(meta) : ''}`;
			})
		),
		meta: true,
		expressFormat: true,
		colorize: true,
	})
);

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/chat', authMiddleware.optional, chatRoutes);
app.use('/analyze-image', authMiddleware.required, visionRoutes);
app.use('/plants', authMiddleware.optional, plantsRoutes);
app.use('/plan', authMiddleware.required, planRoutes);

app.use(errorHandler);

const port = process.env.PORT || 4000;

async function start() {
	const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/garden_app';
	await mongoose.connect(mongoUri);
	app.listen(port, () => {
		console.log(`API listening on http://localhost:${port}`);
	});
}

if (require.main === module) {
	start().catch((err) => {
		console.error('Failed to start server', err);
		process.exit(1);
	});
}

module.exports = { app };
const axios = require('axios');

const COMPATIBILITY = {
	Tomato: ['Basil', 'Marigold', 'Onion'],
	Cucumber: ['Dill', 'Radish', 'Beans'],
	Potato: ['Beans', 'Cabbage'],
};

async function fetchWeather(lat, lon) {
	const apiKey = process.env.OPENWEATHER_API_KEY;
	if (!apiKey || lat == null || lon == null) return null;
	try {
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
		const { data } = await axios.get(url, { timeout: 8000 });
		return data;
	} catch {
		return null;
	}
}

function scorePlantForWeather(plant, weather) {
	if (!weather) return 0;
	const temp = weather?.main?.temp ?? 20;
	// naive scoring: prefer warm-loving plants if temp > 22C
	if (temp > 22 && ['Tomato', 'Cucumber', 'Pepper', 'Eggplant'].includes(plant)) return 2;
	if (temp < 12 && ['Lettuce', 'Pea', 'Spinach'].includes(plant)) return 2;
	return 0;
}

function buildLayout(plants, weather) {
	const layout = [];
	for (const plant of plants) {
		const companions = COMPATIBILITY[plant] || [];
		const score = scorePlantForWeather(plant, weather);
		layout.push({ plant, companions, score });
	}
	return layout;
}

async function recommendPlanting({ plants, location }) {
	const weather = location ? await fetchWeather(location.lat, location.lng) : null;
	const layout = buildLayout(Array.isArray(plants) ? plants : [], weather);
	return { layout, weatherSummary: weather ? { temp: weather.main?.temp, conditions: weather.weather?.[0]?.main } : null };
}

module.exports = { recommendPlanting };
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
	PLANTS_CACHE: 'plants_cache_v1',
};

export async function cachePlants(plants: unknown) {
	await AsyncStorage.setItem(KEYS.PLANTS_CACHE, JSON.stringify({ plants, ts: Date.now() }));
}

export async function getCachedPlants(maxAgeMs = 1000 * 60 * 60) {
	const raw = await AsyncStorage.getItem(KEYS.PLANTS_CACHE);
	if (!raw) return null;
	try {
		const data = JSON.parse(raw);
		if (Date.now() - data.ts > maxAgeMs) return null;
		return data.plants;
	} catch {
		return null;
	}
}
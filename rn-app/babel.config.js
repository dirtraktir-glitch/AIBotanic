module.exports = function (api) {
	api.cache(true);
	const isTest = !!process.env.JEST_WORKER_ID;
	return {
		presets: ['babel-preset-expo', '@babel/preset-typescript'],
		plugins: isTest ? [] : ['nativewind/babel']
	};
};
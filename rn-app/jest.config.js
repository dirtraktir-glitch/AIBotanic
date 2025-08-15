module.exports = {
	preset: 'jest-expo',
	testEnvironment: 'jsdom',
	setupFiles: ['react-native-gesture-handler/jestSetup'],
	transformIgnorePatterns: [
		'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-paper|@react-native-async-storage|expo|expo-status-bar|expo-modules-core|expo-image|expo-notifications|react-native-svg)/)'
	],
	moduleNameMapper: {
		'^react-native$': '<rootDir>/__mocks__/react-native.js',
		'^react-native-paper$': '<rootDir>/__mocks__/react-native-paper.js'
	}
};
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen';

jest.mock('react-native-chart-kit', () => {
	return { LineChart: () => null };
});

describe('HomeScreen', () => {
	it('renders without crashing', () => {
		let root: renderer.ReactTestRenderer | null = null;
		act(() => {
			root = renderer.create(<HomeScreen />);
		});
		expect(root).toBeTruthy();
	});
});
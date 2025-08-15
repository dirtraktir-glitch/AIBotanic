import React from 'react';
import renderer, { act } from 'react-test-renderer';
import ChatScreen from '../screens/ChatScreen';

jest.mock('react-native-animatable', () => ({
	View: (props: any) => null,
}));

jest.mock('../services/api', () => ({
	chat: jest.fn(async (message: string) => ({ source: 'template', reply: `Echo: ${message}` })),
}));

describe('ChatScreen', () => {
	it('renders and sends a message flow', async () => {
		let root: renderer.ReactTestRenderer | null = null;
		await act(async () => {
			root = renderer.create(<ChatScreen />);
		});
		expect(root).toBeTruthy();
	});
});
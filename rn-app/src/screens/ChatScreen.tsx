import React, { useState } from 'react';
import { View, TextInput, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { chat as chatApi } from '../services/api';

interface ChatMessage {
	id: string;
	role: 'user' | 'assistant';
	text: string;
}

const ChatScreen: React.FC = () => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [sending, setSending] = useState(false);

	async function onSend() {
		if (!input.trim()) return;
		const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', text: input.trim() };
		setMessages((prev) => [...prev, userMessage]);
		setInput('');
		setSending(true);
		try {
			const res = await chatApi(userMessage.text, { history: messages.slice(-5) });
			const assistant: ChatMessage = { id: (Date.now() + 1).toString(), role: 'assistant', text: res.reply };
			setMessages((prev) => [...prev, assistant]);
		} catch (e) {
			const assistant: ChatMessage = { id: (Date.now() + 1).toString(), role: 'assistant', text: 'Error sending message' };
			setMessages((prev) => [...prev, assistant]);
		} finally {
			setSending(false);
		}
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
			<View className="flex-1 bg-white">
				<FlatList
					data={messages}
					keyExtractor={(m) => m.id}
					renderItem={({ item }) => (
						<Animatable.View
							animation={item.role === 'user' ? 'fadeInRight' : 'fadeInLeft'}
							duration={250}
							className={`px-4 py-2 m-2 rounded-2xl max-w-[80%] ${item.role === 'user' ? 'self-end bg-primary-light' : 'self-start bg-primary-extra'}`}
						>
							<Text>{item.text}</Text>
						</Animatable.View>
					)}
					contentContainerStyle={{ paddingVertical: 8 }}
				/>

				<View className="flex-row items-center p-3 border-t border-[#c8e6c9] gap-2">
					<TextInput
						className="flex-1 border border-[#c8e6c9] rounded-xl px-3 py-2"
						placeholder="Type a message"
						value={input}
						onChangeText={setInput}
					/>
					<Button mode="contained" onPress={onSend} loading={sending} disabled={sending}>
						Send
					</Button>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

export default ChatScreen;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import YieldChart from '../components/YieldChart';

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Card style={styles.card}>
				<Card.Title title="Welcome" subtitle="Your smart garden assistant" />
				<Card.Content>
					<Text>Track your garden performance:</Text>
					<YieldChart />
				</Card.Content>
				<Card.Actions>
					<Button mode="contained" onPress={() => {}}>
						Get Tips
					</Button>
				</Card.Actions>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	card: {
		borderRadius: 16,
	},
});

export default HomeScreen;
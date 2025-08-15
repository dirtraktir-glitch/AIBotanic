import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const PlannerScreen = () => {
	return (
		<View style={styles.container}>
			<Text variant="titleLarge">Planner</Text>
			<Text>Design your garden layout.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default PlannerScreen;
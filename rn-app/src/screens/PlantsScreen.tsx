import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const PlantsScreen = () => {
	return (
		<View style={styles.container}>
			<Text variant="titleLarge">Plants</Text>
			<Text>Browse and search plant database.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default PlantsScreen;
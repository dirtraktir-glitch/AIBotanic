import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text variant="titleLarge">Profile</Text>
			<Text>Manage your preferences.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default ProfileScreen;
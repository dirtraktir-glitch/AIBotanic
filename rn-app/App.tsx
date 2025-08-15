import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import theme from './src/theme';
import './src/i18n';
import BottomTabs from './src/navigation/BottomTabs';

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<NavigationContainer>
					<BottomTabs />
				</NavigationContainer>
				<StatusBar style="auto" />
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
});

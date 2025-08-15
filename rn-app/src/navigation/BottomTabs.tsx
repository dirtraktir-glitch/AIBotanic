import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PlantsScreen from '../screens/PlantsScreen';
import PlannerScreen from '../screens/PlannerScreen';
import ProfileScreen from '../screens/ProfileScreen';
import theme from '../theme';
import { useTranslation } from 'react-i18next';

export type RootTabParamList = {
	Home: undefined;
	Plants: undefined;
	Planner: undefined;
	Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabs = () => {
	const { t } = useTranslation();
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: theme.colors.primary as string,
				tabBarInactiveTintColor: '#9e9e9e',
				headerShown: false,
				tabBarIcon: ({ color, size }) => {
					let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'home-outline';
					if (route.name === 'Home') iconName = 'home-outline';
					if (route.name === 'Plants') iconName = 'sprout-outline';
					if (route.name === 'Planner') iconName = 'calendar-month-outline';
					if (route.name === 'Profile') iconName = 'account-outline';
					return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
				},
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} options={{ title: t('welcome') }} />
			<Tab.Screen name="Plants" component={PlantsScreen} options={{ title: t('plants') }} />
			<Tab.Screen name="Planner" component={PlannerScreen} options={{ title: t('planner') }} />
			<Tab.Screen name="Profile" component={ProfileScreen} options={{ title: t('profile') }} />
		</Tab.Navigator>
	);
};

export default BottomTabs;
import * as Notifications from 'expo-notifications';

export async function initializeNotifications() {
	await Notifications.requestPermissionsAsync();
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: false,
		}),
	});
}

export async function scheduleWateringReminder(title: string, body: string, secondsFromNow: number) {
	return Notifications.scheduleNotificationAsync({
		content: { title, body },
		trigger: { seconds: secondsFromNow },
	});
}
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

const resources = {
	en: {
		translation: {
			welcome: 'Welcome',
			plants: 'Plants',
			planner: 'Planner',
			profile: 'Profile',
		},
	},
	ru: {
		translation: {
			welcome: 'Добро пожаловать',
			plants: 'Растения',
			planner: 'Планировщик',
			profile: 'Профиль',
		},
	},
};

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	resources,
	lng: Localization.getLocales()[0]?.languageCode ?? 'en',
	fallbackLng: 'en',
	interpolation: { escapeValue: false },
});

export default i18n;
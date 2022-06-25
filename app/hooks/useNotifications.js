import { useEffect } from "react";

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = async (notificationListener) => {
	useEffect(() => {
		registerForPushNotifications();

		if (notificationListener)
			Notifications.addNotificationReceivedListener(notificationListener);
	}, []);

	const registerForPushNotifications = () => {
		try {
			const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			if (!permission.granted) return;

			const token = await Notifications.getExpoPushTokenAsync();
			expoPushTokensApi.register(token);
		} catch (error) {
			console.log("Error getting a push token", error);
		}
	};
};

export default useNotifications;

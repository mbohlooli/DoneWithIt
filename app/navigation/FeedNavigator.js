import React from "react";

import {
	CardStyleInterpolators,
	createStackNavigator,
} from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import routes from "./routes";
import ListingNavigator from "./ListingNavigator";

const Stack = createStackNavigator();
const FeedNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
			presentation: "modal",
			cardOverlayEnabled: true,
			gestureEnabled: true,
			cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
		}}
	>
		<Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
		<Stack.Screen
			name={routes.LISTING_NAVIGATOR}
			component={ListingNavigator}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;

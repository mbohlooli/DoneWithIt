import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const ListingNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen
			name={routes.LISTING_DETAILS}
			component={ListingDetailsScreen}
		/>
		<Stack.Screen name={routes.VIEW_IMAGE} component={ViewImageScreen} />
	</Stack.Navigator>
);

export default ListingNavigator;

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import useAuth from "../auth/useAuth";
import AppIcon from "../components/AppIcon";

import { ListItem, ListItemSeprator } from "../components/lists";

import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		targetScreen: routes.MESSAGES,
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

const AccountScreen = ({ navigation }) => {
	const { user, logout } = useAuth();

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subtitle={user.email}
					image={require("../assets/mosh.jpg")}
					showChevrons
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							onPress={() => navigation.navigate(item.targetScreen)}
							showChevrons
							IconComponent={
								<AppIcon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeprator}
				/>
			</View>
			<ListItem
				title="Logout"
				IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
				onPress={logout}
				showChevrons
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});

export default AccountScreen;

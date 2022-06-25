import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => (
	<TouchableOpacity style={styles.container} onPress={onPress}>
		<AppIcon
			backgroundColor={item.backgroundColor}
			name={item.icon}
			size={80}
		/>
		<AppText style={styles.label}>{item.label}</AppText>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		alignItems: "center",
		width: "33%",
	},
	label: {
		marginTop: 5,
		textAlign: "center",
	},
});

export default CategoryPickerItem;

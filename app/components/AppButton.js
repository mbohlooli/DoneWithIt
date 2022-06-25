import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => (
	<TouchableOpacity
		activeOpacity={0.8}
		style={[styles.button, { backgroundColor: colors[color] }]}
		onPress={onPress}
	>
		<Text style={styles.text}>{title}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: colors.primary,
		borderRadius: 25,
		justifyContent: "center",
		padding: 15,
		width: "100%",
		marginVertical: 10,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});

export default AppButton;

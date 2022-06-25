import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const AppIcon = ({
	name,
	size = 40,
	backgroundColor = colors.black,
	iconColor = colors.white,
}) => (
	<View
		style={{
			width: size,
			height: size,
			borderRadius: size / 2,
			backgroundColor,
			alignItems: "center",
			justifyContent: "center",
		}}
	>
		<MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
	</View>
);

const styles = StyleSheet.create({});

export default AppIcon;

import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = ({ route, navigation }) => (
	<View style={styles.container}>
		{/* TODO: fix the not working touchable */}
		<MaterialCommunityIcons
			name="close"
			size={35}
			color={colors.white}
			style={styles.closeIcon}
		/>
		<MaterialCommunityIcons
			name="trash-can-outline"
			size={35}
			color={colors.white}
			style={styles.deleteIcon}
		/>
		<Image
			resizeMode="contain"
			source={{ uri: route.params.images[0].url }}
			style={styles.image}
		/>
	</View>
);

const styles = StyleSheet.create({
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 30,
	},
	container: {
		backgroundColor: colors.black,
		flex: 1,
	},
	deleteIcon: {
		position: "absolute",
		top: 40,
		right: 30,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ViewImageScreen;

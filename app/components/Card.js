import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import colors from "../config/colors";

const Card = ({ title, subtitle, imageUrl, onPress, thumbnailUrl }) => (
	<TouchableWithoutFeedback onPress={onPress}>
		<View style={styles.card}>
			<Image
				style={styles.image}
				tint="light"
				preview={{ thumbnailUrl }}
				uri={imageUrl}
			/>
			<View style={styles.detailsContainer}>
				<AppText numberOfLines={1} style={styles.title}>
					{title}
				</AppText>
				<AppText numberOfLines={2} style={styles.subtitle}>
					{subtitle}
				</AppText>
			</View>
		</View>
	</TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginVertical: 10,
		overflow: "hidden",
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	subtitle: {
		color: colors.secondary,
		fontWeight: "bold",
	},
	title: {
		marginBottom: 7,
	},
});

export default Card;

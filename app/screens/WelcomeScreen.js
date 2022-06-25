import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => (
	<ImageBackground
		blurRadius={4}
		source={require("../assets/background.jpg")}
		style={styles.background}
	>
		<View style={styles.logoContainer}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Text style={styles.tagline}>Sell What You Don't Need</Text>
		</View>
		<View style={styles.buttonsContainer}>
			<AppButton
				title="Login"
				onPress={() => navigation.navigate(routes.LOGIN)}
			/>
			<AppButton
				title="Register"
				color="secondary"
				onPress={() => navigation.navigate(routes.REGISTER)}
			/>
		</View>
	</ImageBackground>
);

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	tagline: {
		color: colors.primary,
		fontSize: 25,
		fontWeight: "600",
		paddingVertical: 20,
	},
	buttonsContainer: {
		padding: 20,
		width: "100%",
	},
	logo: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
	logoContainer: {
		alignItems: "center",
		position: "absolute",
		top: 70,
	},
});

export default WelcomeScreen;

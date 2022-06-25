import React from "react";
import { View, StyleSheet } from "react-native";

import Constats from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import AppText from "./AppText";

const OfflineNotice = () => {
	const netInfo = useNetInfo();

	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
		return (
			<View style={styles.container}>
				<AppText style={styles.text}>No Internet Connection.</AppText>
			</View>
		);

	return null;
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.primary,
		height: 70,
		justifyContent: "center",
		paddingTop: Constats.statusBarHeight,
		position: "absolute",
		top: 0,
		width: "100%",
		zIndex: 10,
	},
	text: {
		color: colors.white,
	},
});

export default OfflineNotice;

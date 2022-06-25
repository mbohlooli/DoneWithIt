import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) =>
	visible && error ? <AppText style={styles.error}>{error}</AppText> : null;

const styles = StyleSheet.create({
	error: {
		color: "red",
	},
});

export default ErrorMessage;

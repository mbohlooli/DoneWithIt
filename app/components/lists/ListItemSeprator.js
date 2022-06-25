import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

const ListItemSeprator = () => <View style={styles.seprator} />;

const styles = StyleSheet.create({
	seprator: {
		width: "100%",
		height: 1,
		backgroundColor: colors.light,
	},
});

export default ListItemSeprator;

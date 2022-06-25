import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";

import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						color={colors.primary}
						progress={progress}
						width={200}
					/>
				) : (
					<LottieView
						autoPlay={true}
						loop={false}
						onAnimationFinish={onDone}
						source={require("../assets/animations/done.json")}
						style={styles.animation}
					/>
				)}
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	animation: {
		width: 400,
	},
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
});

export default UploadScreen;

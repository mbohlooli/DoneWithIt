import React, { useEffect } from "react";
import {
	StyleSheet,
	Image,
	Alert,
	View,
	TouchableWithoutFeedback,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted)
			alert("You need to enable the permission to access the library");
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const selectImage = async () => {
		try {
			const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!cancelled) onChangeImage(uri);
		} catch (error) {
			console.log("Error reading an image", error);
		}
	};

	const deleteImage = () => {
		Alert.alert("Delete", "Are you sure you want to delete this image?", [
			{ text: "Yes", onPress: () => onChangeImage(null) },
			{ text: "No" },
		]);
	};

	const handlePress = () => {
		if (!imageUri) selectImage();
		else deleteImage();
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{imageUri ? (
					<Image source={{ uri: imageUri }} style={styles.image} />
				) : (
					<MaterialCommunityIcons
						name="camera"
						size={40}
						color={colors.medium}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
	// return imageUri ? (
	// 	<TouchableOpacity onPress={deleteImage}>
	// 		<Image source={{ uri: imageUri }} style={[styles.container, style]} />
	// 	</TouchableOpacity>
	// ) : (
	// 	<TouchableOpacity style={[styles.container, style]} onPress={selectImage}>
	// 		<MaterialCommunityIcons name="camera" size={35} color={colors.medium} />
	// 	</TouchableOpacity>
	// );
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		borderRadius: 15,
		backgroundColor: colors.light,
		height: 100,
		justifyContent: "center",
		overflow: "hidden",
		width: 100,
	},
	image: {
		height: "100%",
		width: "100%",
	},
});

export default ImageInput;

import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View style={styles.image} key={uri}>
							<ImageInput
								imageUri={uri}
								onChangeImage={() => onRemoveImage(uri)}
							/>
						</View>
					))}
					<ImageInput onChangeImage={onAddImage} />
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginRight: 10,
	},
});

export default ImageInputList;

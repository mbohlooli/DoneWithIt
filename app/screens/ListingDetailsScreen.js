import React from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import routes from "../navigation/routes";

const ListingDetailsScreen = ({ route, navigation }) => {
	const { images, title, price } = route.params;

	return (
		<KeyboardAvoidingView
			behavior="position"
			keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
		>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate(routes.VIEW_IMAGE, { images })}
			>
				<Image
					style={styles.image}
					tint="light"
					preview={{ uri: images[0].thumbnailUrl }}
					uri={images[0].url}
				/>
			</TouchableWithoutFeedback>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.price}>{"$" + price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/mosh.jpg")}
						title="Mosh Hamedani"
						subtitle="5 Listings"
					/>
				</View>
				<ContactSellerForm listing={listing} />
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;

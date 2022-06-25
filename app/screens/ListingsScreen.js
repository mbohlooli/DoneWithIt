import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppIndicator from "../components/AppIndicator";
import useApi from "../hooks/useApi";
import OfflineNotice from "../components/OfflineNotice";

const ListingsScreen = ({ navigation }) => {
	const [refreshing, setRefreshing] = useState(false);
	const {
		data: listings,
		error,
		loading,
		request: loadListings,
	} = useApi(listingsApi.getListings);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<View style={styles.errorContainer}>
					<AppText>Couldn't retrive the listings.</AppText>
					<AppButton title="Retry" onPress={loadListings} />
				</View>
			)}
			<AppIndicator visible={loading} />
			<FlatList
				refreshing={refreshing}
				onRefresh={() => loadListings()}
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={"$" + item.price}
						imageUrl={item.images[0].url}
						onPress={() =>
							navigation.push(routes.LISTING_NAVIGATOR, {
								screen: routes.LISTING_DETAILS,
								params: item,
							})
						}
						thumbnailUrl={item.images[0].thumbnailUrl}
					/>
				)}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingHorizontal: 10,
		paddingTop: 0,
		backgroundColor: colors.light,
	},
	errorContainer: {
		marginTop: 30,
	},
});

export default ListingsScreen;

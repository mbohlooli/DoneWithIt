import React, { useState } from "react";
import {
	FlatList,
	Modal,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const AppPicker = ({
	icon,
	items,
	numColumns = 1,
	placeholder,
	onSelectItem,
	PickerItemComponent = PickerItem,
	selectedItem,
	width = "100%",
}) => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					<View style={styles.content}>
						{icon && (
							<MaterialCommunityIcons
								name={icon}
								size={20}
								color={defaultStyles.colors.medium}
								style={styles.icon}
							/>
						)}
						{selectedItem ? (
							<AppText style={styles.text}>{selectedItem.label}</AppText>
						) : (
							<AppText style={styles.placeholder}>{placeholder}</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						style={styles.chevron}
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<TouchableOpacity
					onPress={() => setModalVisible(false)}
					activeOpacity={0.7}
					style={styles.closeButton}
				>
					<AppText style={styles.closeText}>Close</AppText>
				</TouchableOpacity>
				<FlatList
					data={items}
					keyExtractor={(item) => item.value.toString()}
					numColumns={numColumns}
					renderItem={({ item }) => (
						<PickerItemComponent
							item={item}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	closeButton: {
		alignItems: "center",
		marginTop: 10,
	},
	closeText: {
		color: "dodgerblue",
	},
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},
	content: {
		flex: 1,
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: defaultStyles.colors.medium,
	},
	text: {
		flex: 1,
	},
});

export default AppPicker;

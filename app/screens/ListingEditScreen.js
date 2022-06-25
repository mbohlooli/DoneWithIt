import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";
import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FromImagePicker from "../components/forms/FromImagePicker";
import useLocation from "../hooks/useLocation";
import ListingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
	title: Yup.string().min(1).required().label("Title"),
	price: Yup.number().min(1).max(1000).required().label("Price"),
	category: Yup.object().nullable().required().label("Category"),
	description: Yup.string().label("Description"),
	images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
	{
		label: "Furniture",
		value: 1,
		icon: "floor-lamp",
		backgroundColor: "#fc5c65",
	},
	{ label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
	{ label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
	{ label: "Games", value: 4, icon: "cards", backgroundColor: "#26de81" },
	{
		label: "Clothing",
		value: 5,
		icon: "shoe-heel",
		backgroundColor: "#2bcbba",
	},
	{ label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
	{
		label: "Movies & Music",
		value: 7,
		icon: "headphones",
		backgroundColor: "#4b7bec",
	},
	{ label: "Books", value: 8, icon: "book-open", backgroundColor: "#9c67e3" },
	{ label: "Other", value: 9, icon: "application", backgroundColor: "#7c8da2" },
];

const ListingEditScreen = () => {
	const location = useLocation();
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await ListingsApi.addListing(
			{ ...listing, location },
			(progress) => setProgress(progress)
		);

		if (!result.ok) {
			setUploadVisible(false);
			return alert("Could not save the listing.");
		}

		resetForm();
	};

	return (
		<Screen style={styles.container}>
			<UploadScreen
				onDone={() => setUploadVisible(false)}
				progress={progress}
				visible={uploadVisible}
			/>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: [],
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<FromImagePicker name="images" />
				<AppFormField maxLength={255} name="title" placeholder="Title" />
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
					width={120}
				/>
				<AppFormPicker
					items={categories}
					name="category"
					numColumns={3}
					placeholder="Category"
					PickerItemComponent={CategoryPickerItem}
					width="50%"
				/>
				<AppFormField
					maxLength={255}
					multiline
					numberOfLines={3}
					name="description"
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
});

export default ListingEditScreen;

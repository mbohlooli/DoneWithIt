import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeprator from "../components/lists/ListItemSeprator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: 1,
		title: "Mosh Hamedani",
		description: "Hey! Is this item avilable?",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "Mosh Hamedani",
		description:
			"I'm intrested in this item. When will you be able to post it?",
		image: require("../assets/mosh.jpg"),
	},
];

const MessagesScreen = () => {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) =>
		setMessages(messages.filter((m) => m.id != message.id));

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subtitle={item.description}
						image={item.image}
						onPress={() => console.log("Message selected", item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
						showChevrons
					/>
				)}
				ItemSeparatorComponent={ListItemSeprator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/mosh.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({});

export default MessagesScreen;

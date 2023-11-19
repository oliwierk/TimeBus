import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

import tw from "twrnc";

export default function HomeScreen() {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const handleSearch = (
		departureStop: string,
		arrivalStop: string,
		departureTime: string
	) => {
		navigation.navigate("Routes", {
			departureStop,
			arrivalStop,
			departureTime,
		});
	};
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={tw`h-full`}>
				<Header title='TimeBus' onSearch={handleSearch} />
			</View>
		</TouchableWithoutFeedback>
	);
}

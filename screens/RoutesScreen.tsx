import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { View, Text } from "react-native";
import tw from "twrnc";

export default function RoutesScreen() {
	return (
		<View style={tw`h-full`}>
			<Header title='Trasa' />
		</View>
	);
}

import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { View, Text } from "react-native";
import tw from "twrnc";

export default function ScheduleScreen() {
	return (
		<View style={tw`h-full`}>
			<Navbar />
		</View>
	);
}

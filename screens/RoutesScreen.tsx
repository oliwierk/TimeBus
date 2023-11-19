import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { View, Text } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

import tw from "twrnc";

type RoutesScreenRouteProp = RouteProp<RootStackParamList, "Routes">;

export default function RoutesScreen() {
	const route = useRoute<RoutesScreenRouteProp>();
	const { departureStop, arrivalStop, departureTime } = route.params || {};
	return (
		<View style={{ flex: 1 }}>
			<Text>Od: {departureStop}</Text>
			<Text>Do: {arrivalStop}</Text>
			<Text>Godzina: {departureTime}</Text>
			{/* Wyświetlanie wyników wyszukiwania */}
		</View>
	);
}

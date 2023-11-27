import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { View, Text } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderFilled from "../components/HeaderFilled";

type RoutesScreenRouteProp = RouteProp<RootStackParamList, "Routes">;

export default function RoutesScreen() {
	const route = useRoute<RoutesScreenRouteProp>();
	const { departureStop, arrivalStop, departureTime } = route.params || {};
	return (
		<View>
			<HeaderFilled
				departureStop={departureStop}
				arrivalStop={arrivalStop}
			></HeaderFilled>
			<View style={tw`flex flex-col`}>
				<View style={tw`w-full h-24 border-2 rounded-xl mb-2`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Text style={tw`text-2xl`}>43</Text>
						<Text style={tw`text-xl`}>Katowice Plac Wolności</Text>
					</View>
					<Text style={tw`text-base`}>Odjazd o: 13:20</Text>
					<Text style={tw`text-base`}>Dojazd o: 14:00</Text>
				</View>
				<View style={tw`w-full h-24 border-2 rounded-xl mb-2`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Text style={tw`text-2xl`}>43</Text>
						<Text style={tw`text-xl`}>Katowice Plac Wolności</Text>
					</View>
					<Text style={tw`text-base`}>Odjazd o: 13:20</Text>
					<Text style={tw`text-base`}>Dojazd o: 14:00</Text>
				</View>
				<View style={tw`w-full h-24 border-2 rounded-xl mb-2`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Text style={tw`text-2xl`}>43</Text>
						<Text style={tw`text-xl`}>Katowice Plac Wolności</Text>
					</View>
					<Text style={tw`text-base`}>Odjazd o: 13:20</Text>
					<Text style={tw`text-base`}>Dojazd o: 14:00</Text>
				</View>
				<View style={tw`w-full h-24 border-2 rounded-xl mb-2`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Text style={tw`text-2xl`}>43</Text>
						<Text style={tw`text-xl`}>Katowice Plac Wolności</Text>
					</View>
					<Text style={tw`text-base`}>Odjazd o: 13:20</Text>
					<Text style={tw`text-base`}>Dojazd o: 14:00</Text>
				</View>
				<View style={tw`w-full h-24 border-2 rounded-xl mb-2`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Text style={tw`text-2xl`}>43</Text>
						<Text style={tw`text-xl`}>Katowice Plac Wolności</Text>
					</View>
					<Text style={tw`text-base`}>Odjazd o: 13:20</Text>
					<Text style={tw`text-base`}>Dojazd o: 14:00</Text>
				</View>
			</View>
		</View>
	);
}

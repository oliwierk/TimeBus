import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRoad } from "@fortawesome/free-solid-svg-icons/faRoad";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

import tw from "twrnc";

type NavigationType = NavigationProp<RootStackParamList>;
export default function Navbar() {
	const navigation = useNavigation<NavigationType>();

	return (
		<SafeAreaView
			style={tw`w-full h-24 flex items-center flex-row justify-around bg-blue-950 absolute bottom-0`}
		>
			<TouchableOpacity
				style={tw`flex justify-center items-center`}
				onPress={() => navigation.navigate("Routes")}
			>
				<FontAwesomeIcon icon={faRoad} size={40} color={"white"} />
				<Text style={tw`text-slate-100 text-lg text-center`}>Trasa</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={tw`flex justify-center items-center`}
				onPress={() => navigation.navigate("Schedule")}
			>
				<FontAwesomeIcon icon={faCalendarDays} size={35} color={"white"} />
				<Text style={tw`text-slate-100 text-lg text-center mt-1`}>Rozkład</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

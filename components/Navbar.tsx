import { SafeAreaView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRoad } from "@fortawesome/free-solid-svg-icons/faRoad";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import tw from "twrnc";

export default function App() {
	return (
		<SafeAreaView
			style={tw`w-full h-20 flex items-center flex-row justify-around bg-blue-800 absolute bottom-0`}
		>
			<FontAwesomeIcon icon={faRoad} size={40} color={"white"} />
			<FontAwesomeIcon icon={faCalendarDays} size={40} color={"white"} />
		</SafeAreaView>
	);
}

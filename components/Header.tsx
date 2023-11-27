import { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import tw from "twrnc";

interface HeaderProps {
	title: string;
	onSearch: (
		departureStop: string,
		arrivalStop: string,
		departureTime: string
	) => void;
}
const Header = ({ title, onSearch }: HeaderProps) => {
	const [departureStop, setDepartureStop] = useState("");
	const [arrivalStop, setArrivalStop] = useState("");
	const [departureTime, setDepartureTime] = useState("");
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date: Date) => {
		const options = { hour: "2-digit", minute: "2-digit" };
		setDepartureTime(date.toLocaleTimeString("en-GB", options));
		hideDatePicker();
	};

	return (
		<SafeAreaView style={tw`h-60 w-full flex items-center bg-blue-950`}>
			<Text style={tw`text-slate-100 text-2xl mb-4`}>{title} </Text>
			<TextInput
				style={tw`bg-slate-100 w-72 h-8 p-2 rounded-lg mb-4`}
				onChangeText={setDepartureStop}
				value={departureStop}
				placeholder='Skąd?'
				// keyboardType='default'
			/>
			<TextInput
				style={tw`bg-slate-100 w-72 h-8 p-2 rounded-lg mb-4`}
				onChangeText={setArrivalStop}
				value={arrivalStop}
				placeholder='Dokąd?'
				keyboardType='default'
			/>
			<TouchableOpacity
				onPress={showDatePicker}
				style={tw`bg-slate-100 w-36 h-8 p-2 rounded-lg mb-4 self-start ml-11`}
			>
				<Text style={tw`text-center`}>
					{departureTime || "Wybierz godzinę"}
				</Text>
			</TouchableOpacity>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode='time'
				themeVariant={"dark"}
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			/>
			<TouchableOpacity
				style={tw`bg-blue-700 p-2 rounded-lg `}
				onPress={() => onSearch(departureStop, arrivalStop, departureTime)}
			>
				<Text style={tw`text-white text-lg text-center`}>
					<FontAwesomeIcon icon={faMagnifyingGlass} size={36} color={"white"} />
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Header;

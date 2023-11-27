// HeaderFilled.tsx
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import tw from "twrnc";

interface HeaderFilledProps {
	departureStop: string;
	arrivalStop: string;
}

const HeaderFilled = ({ departureStop, arrivalStop }: HeaderFilledProps) => {
	return (
		<View style={tw`h-36 w-full flex justify-center pl-8 gap-2 bg-blue-950`}>
			<View style={tw`flex flex-row items-center gap-1`}>
				<FontAwesomeIcon icon={faLocationDot} size={18} color={"white"} />
				<Text style={tw`text-slate-50 text-lg tracking-wide`}>
					{departureStop}
				</Text>
			</View>
			<View style={tw`flex flex-row items-center gap-1`}>
				<FontAwesomeIcon icon={faLocationDot} size={24} color={"white"} />
				<Text style={tw`text-slate-50 text-2xl tracking-wide`}>
					{arrivalStop}
				</Text>
			</View>
		</View>
	);
};

export default HeaderFilled;

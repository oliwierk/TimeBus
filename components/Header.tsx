import { useState } from "react";
import { SafeAreaView, Text, TextInput } from "react-native";

import tw from "twrnc";

interface HeaderProps {
	title: string;
}
const Header = ({ title }: HeaderProps) => {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [input3, setInput3] = useState("");

	return (
		<SafeAreaView style={tw`h-60 w-full flex items-center bg-blue-950`}>
			<Text style={tw`text-slate-100 text-2xl mb-4`}>{title}</Text>
			<TextInput
				style={tw`bg-slate-100 w-72 h-8 p-2 rounded-lg mb-4`}
				onChangeText={setInput1}
				value={input1}
				placeholder='Skąd?'
				keyboardType='default'
			/>
			<TextInput
				style={tw`bg-slate-100 w-72 h-8 p-2 rounded-lg mb-4`}
				onChangeText={setInput2}
				value={input2}
				placeholder='Dokąd?'
				keyboardType='default'
			/>
			<TextInput
				style={tw`bg-slate-100 w-36 h-8 p-2 rounded-lg self-start ml-11`}
				onChangeText={setInput3}
				value={input3}
				placeholder='O której?'
				keyboardType='default'
			/>
		</SafeAreaView>
	);
};

export default Header;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RoutesScreen from "./screens/RoutesScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import tw from "twrnc";

export type RootStackParamList = {
	Home: undefined;
	Routes: {
		departureStop: string;
		arrivalStop: string;
		departureTime: string;
	};
	Schedule: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Routes'
					component={RoutesScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Schedule'
					component={ScheduleScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

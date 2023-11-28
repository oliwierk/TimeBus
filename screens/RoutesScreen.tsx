import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import tw from "twrnc";
import HeaderFilled from "../components/HeaderFilled";
import { firestore } from "firebase-admin";

type RoutesScreenRouteProp = RouteProp<RootStackParamList, "Routes">;

interface Connection {
	id: string;
	routeNumber: string;
	departureTime: string;
	arrivalTime: string;
	departureStop: string;
	arrivalStop: string;
}

const findRoutes = async (departureStop, arrivalStop) => {
	const departureTimes = await firestore()
		.collection("stop_times")
		.where("stop_id", "==", departureStop)
		.get();

	// Przeszukaj kolekcję 'stop_times' dla przystanku końcowego
	const arrivalTimes = await firestore()
		.collection("stop_times")
		.where("stop_id", "==", arrivalStop)
		.get();

	// Znajdź wspólne 'trip_id' dla obu przystanków
	const commonTrips = departureTimes.docs
		.map(doc => doc.data().trip_id)
		.filter(tripId =>
			arrivalTimes.docs.some(doc => doc.data().trip_id === tripId)
		);

	// Zwróć wspólne trasy
	return commonTrips;
};

const findConnections = async (departureStop, arrivalStop, departureTime) => {
	const trips = await findRoutes(departureStop, arrivalStop);

	const connections = await Promise.all(
		trips.map(async tripId => {
			const departureData = await firestore()
				.collection("stop_times")
				.where("trip_id", "==", tripId)
				.where("stop_id", "==", departureStop)
				.where("departure_time", ">=", departureTime)
				.get();

			const arrivalData = await firestore()
				.collection("stop_times")
				.where("trip_id", "==", tripId)
				.where("stop_id", "==", arrivalStop)
				.get();

			// Zakładamy, że departureData i arrivalData mają dokładnie jedną wartość
			if (!departureData.empty && !arrivalData.empty) {
				return {
					tripId,
					departureTime: departureData.docs[0].data().departure_time,
					arrivalTime: arrivalData.docs[0].data().arrival_time,
				};
			}
		})
	);
	return connections.filter(connection => connection != null);
};

export default function RoutesScreen() {
	const route = useRoute<RoutesScreenRouteProp>();
	const { departureStop, arrivalStop, departureTime } = route.params || {};
	const [connections, setConnections] = useState<Connection[]>([]);

	const fetchConnections = async () => {
		if (!departureStop || !arrivalStop) return;
		const foundConnections = await findConnections(
			departureStop,
			arrivalStop,
			departureTime
		);
		setConnections(foundConnections);
	};

	useEffect(() => {
		fetchConnections();
	}, [departureStop, arrivalStop, departureTime]);

	return (
		<View>
			<HeaderFilled
				departureStop={departureStop}
				arrivalStop={arrivalStop}
			></HeaderFilled>
			<View style={tw`flex flex-col`}>
				<FlatList
					data={connections}
					renderItem={({ item }) => (
						<View style={tw`w-full h-24 border-2 rounded-xl mb-2`}>
							<View style={tw`flex flex-row items-center gap-2`}>
								<Text style={tw`text-2xl`}>{item.routeNumber}</Text>
								<Text style={tw`text-xl`}>{item.arrivalStop}</Text>
							</View>
							<Text style={tw`text-base`}>Odjazd o: {item.departureTime}</Text>
							<Text style={tw`text-base`}>Dojazd o: {item.arrivalTime}</Text>
						</View>
					)}
					keyExtractor={item => item.id}
				/>
			</View>
		</View>
	);
}

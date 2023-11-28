const admin = require("firebase-admin");
const serviceAccount = require("./timebus-33ac8-firebase-adminsdk-c6e9z-4899d98b8a.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const collections = [
	{ filePath: "./GTFS/agency.json", subCollection: "agency" },
	{ filePath: "./GTFS/calendar.json", subCollection: "calendar" },
	{ filePath: "./GTFS/calendar_dates.json", subCollection: "calendar_dates" },
	{ filePath: "./GTFS/routes.json", subCollection: "routes" },
	{ filePath: "./GTFS/routes_ext.json", subCollection: "routes_ext" },
	{ filePath: "./GTFS/shapes.json", subCollection: "shapes" },
	{ filePath: "./GTFS/stop_times.json", subCollection: "stop_times" },
	{ filePath: "./GTFS/stops.json", subCollection: "stops" },
	{ filePath: "./GTFS/stops_ext.json", subCollection: "stops_ext" },
	{ filePath: "./GTFS/trips.json", subCollection: "trips" },
	{ filePath: "./GTFS/trips_ext.json", subCollection: "trips_ext" },
];

const importData = async (filePath, subCollection) => {
	const data = require(filePath);
	const collectionRef = db
		.collection("GZMFull")
		.doc(subCollection)
		.collection(subCollection);

	for (const item of data) {
		await collectionRef.add(item);
	}
};

collections.forEach(collection => {
	importData(collection.filePath, collection.subCollection).then(() =>
		console.log(`Dane z ${collection.subCollection} zostały zaimportowane.`)
	);
});

const admin = require("firebase-admin");
const serviceAccount = require("./timebus-33ac8-firebase-adminsdk-c6e9z-4899d98b8a.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const jsonFiles = [
	"./path/to/your-first-json-file.json",
	"./path/to/your-second-json-file.json",
	// Dodaj więcej ścieżek do plików JSON tutaj
];

const importData = async filePath => {
	const data = require(filePath);
	for (const item of data) {
		await db.collection("routes").add(item);
	}
};

jsonFiles.forEach(file => {
	importData(file).then(() =>
		console.log(`Dane z pliku ${file} zostały zaimportowane.`)
	);
});

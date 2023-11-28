const fs = require("fs");
const Papa = require("papaparse");
const path = require("path");

const csvFiles = [
	"agency.txt",
	"calendar.txt",
	"calendar_dates.txt",
	"routes.txt",
	"routes_ext.txt",
	"shapes.txt",
	"stop_times.txt",
	"stops.txt",
	"stops_ext.txt",
	"trips.txt",
	"trips_ext.txt",
];

const convertCsvToJson = (csvFilePath, jsonFilePath) => {
	const csvFile = fs.readFileSync(csvFilePath, "utf8");

	Papa.parse(csvFile, {
		header: true,
		complete: results => {
			fs.writeFileSync(
				jsonFilePath,
				JSON.stringify(results.data, null, 2),
				"utf8"
			);
			console.log(
				`Konwersja zakończona. Plik JSON został zapisany: ${jsonFilePath}`
			);
		},
	});
};

csvFiles.forEach(fileName => {
	const csvFilePath = path.join("GTFS", fileName);
	const jsonFilePath = path.join(
		"GTFS",
		`${path.basename("READY", ".txt")}.json`
	);
	convertCsvToJson(csvFilePath, jsonFilePath);
});

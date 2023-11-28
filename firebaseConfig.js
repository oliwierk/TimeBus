import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBquq7_3195rdW-NupbZmK2VzwStfPTXng",
	authDomain: "timebus-33ac8.firebaseapp.com",
	projectId: "timebus-33ac8",
	storageBucket: "timebus-33ac8.appspot.com",
	messagingSenderId: "633834667638",
	appId: "1:633834667638:web:ac55fc2680051f55c6a957",
	measurementId: "G-2J6BQ4J69T",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;

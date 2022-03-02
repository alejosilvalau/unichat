import firebase from "firebase/app";
import "firebase/auth";

const { REACT_APP_API_KEY, REACT_APP_MESS_SEND_ID, REACT_APP_API_ID } =
	process.env;

export const auth = firebase
	.initializeApp({
		apiKey: REACT_APP_API_KEY,
		authDomain: "unichat-780de.firebaseapp.com",
		projectId: "unichat-780de",
		storageBucket: "unichat-780de.appspot.com",
		messagingSenderId: REACT_APP_MESS_SEND_ID,
		appId: REACT_APP_API_ID,
	})
	.auth();

import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyAJG-jJwcUnkaf-xL8ZLdUxu18csPp3uEI",
    authDomain: "todo-9a2e5.firebaseapp.com",
    databaseURL: "https://todo-9a2e5.firebaseio.com",
    projectId: "todo-9a2e5",
    storageBucket: "todo-9a2e5.appspot.com",
    messagingSenderId: "720408671208"
};

firebase.initializeApp(config);
export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
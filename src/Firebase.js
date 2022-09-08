import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCRZuD0ll6hxlHTDZiFwX87UfiT_fuuDX0",
    authDomain: "inspectwa-422d3.firebaseapp.com",
    databaseURL: "https://inspectwa-422d3.firebaseio.com",
    projectId: "inspectwa-422d3",
    storageBucket: "inspectwa-422d3.appspot.com",
    messagingSenderId: "279008653722",
    appId: "1:279008653722:web:c4bdecafd8ebc4000e0a23",
    measurementId: "G-F3BZWHWREM"
}

firebase.initializeApp(config);

export default firebase;
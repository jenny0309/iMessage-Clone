import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCjCAFSlrPC8rKHz5LJGh6ZzWzkSNk_Mfg",
    authDomain: "imessage-clone-yt-c988c.firebaseapp.com",
    databaseURL: "https://imessage-clone-yt-c988c.firebaseio.com",
    projectId: "imessage-clone-yt-c988c",
    storageBucket: "imessage-clone-yt-c988c.appspot.com",
    messagingSenderId: "551550238698",
    appId: "1:551550238698:web:23dafd93ffcea0bb3d3c93",
    measurementId: "G-2M23T8VV1C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

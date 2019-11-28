import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC8aLRsVaL9eiBe-quqlGyvFPqPPRelwwY",
    authDomain: "angular-pro-6e68d.firebaseapp.com",
    databaseURL: "https://angular-pro-6e68d.firebaseio.com",
    projectId: "angular-pro-6e68d",
    storageBucket: "angular-pro-6e68d.appspot.com",
    messagingSenderId: "269202064062",
    appId: "1:269202064062:web:394c435920fba92b6e14ef",
    measurementId: "G-L6ZQ9HZTH3"
}

firebase.initializeApp(config);

// this function is to create a new user profile to our firestore collection
export const createUserProfile = async (userAuth, otherData) => {
    if (!userAuth) return; // if the user is logged out 

    // Get the firestore referernce
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // Get the snapshot of this firestore reference
    const snapShot = await userRef.get();

    // the snapshot object has an element called exists, so we can check if that user reference exists in our firestore
    if(!snapShot.exists) {
        // Get the displayName, email, and uid from the userAuth object
        const {displayName, email, uid} = userAuth;
        const createdAt = new Date();

        // after we checked if the user is exist or not, in case it doesn't we're going to store(Set) the data that we're getting from the userAuth object
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData,
                uid
            })
        } catch(error) {
            console.log(error)
        }
        
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
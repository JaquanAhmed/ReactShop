import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//firebase key
const config = {
  apiKey: "AIzaSyCexT_8MbInKNrBfZInoRUBNTZCQQbRqeM",
    authDomain: "crown-db-caa22.firebaseapp.com",
    databaseURL: "https://crown-db-caa22.firebaseio.com",
    projectId: "crown-db-caa22",
    storageBucket: "crown-db-caa22.appspot.com",
    messagingSenderId: "473595240785",
    appId: "1:473595240785:web:40cc4de93222b43d95f370",
    measurementId: "G-FLT6QH33K4"
};

firebase.initializeApp(config);

//Get user data if user is authenticated
//if no data create data
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//add shop items to firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

//authentication
export const auth = firebase.auth();
//database
export const firestore = firebase.firestore();

//authenticate users Google sign in
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

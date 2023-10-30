import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEaDIRS6UuwQtE-ySNavbXNdBKNc7KAoo",
  authDomain: "shop-e3e38.firebaseapp.com",
  projectId: "shop-e3e38",
  storageBucket: "shop-e3e38.appspot.com",
  messagingSenderId: "641606642676",
  appId: "1:641606642676:web:25cda5ae12dca22e1ee7a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
 const batch = writeBatch(db);
 const collectionRef = collection(db, collectionKey);
 objectsToAdd.forEach(element => {
  const docRef = doc(collectionRef, element.title.toLowerCase());
  batch.set(docRef, element);
 });
 await batch.commit();
}

export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
}
//sign in with google
export const createUserDocFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      const setDocS = await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
       
      });
      console.log(setDocS);
    } catch (error) {
      console.log("there was an error creating the user", error.message);
    }
  }
};
//sign in from form 
export const createUserDocFromAuthForm = async (userAuth, displayName) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  const { email } = userAuth;
  if (!userSnapShot.exists()) { 
    const createdAt = new Date();
    try {
      const setDocS = await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
       
      });
      console.log(setDocS);
    } catch (error) {
      console.log("there was an error creating the user", error.message);
    }
  }
};
export const createAuthUserwithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SignInAuthUserwithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const SignOutUser = async () => {
  return await signOut(auth);
};
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
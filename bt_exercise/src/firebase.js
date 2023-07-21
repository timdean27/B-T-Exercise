import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQxW3Fwl2l5Ae2im8w1Lq1kkStizS9bJw",
  authDomain: "b-t-exercise.firebaseapp.com",
  projectId: "b-t-exercise",
  storageBucket: "b-t-exercise.appspot.com",
  messagingSenderId: "33184583742",
  appId: "1:33184583742:web:7775529a9f60f0e84f016f",
  measurementId: "G-9NY4VRM4EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app); // Get the auth object using the getAuth function
export const firebaseDB = getFirestore(app);
export { app, analytics, auth, provider };

export const checkUserProfileExists = async (uid) => {
    const userProfileRef = doc(firebaseDB, "userProfiles", uid);
    const userProfileSnapshot = await getDoc(userProfileRef);
    return userProfileSnapshot.exists();
  };
  
  export const createUserProfile = async (uid, profileData) => {
    try {
      const userProfileRef = doc(firebaseDB, "userProfiles", uid);
      await setDoc(userProfileRef, profileData);
    } catch (error) {
      console.error("Error creating user profile:", error);
      throw error;
    }
  };
  
  export const getUserProfile = async (uid) => {
    try {
      console.log("UID:", uid);
      const userProfileRef = doc(firebaseDB, "userProfiles", uid);
      console.log("userProfileRef:", userProfileRef);
      const userProfileSnapshot = await getDoc(userProfileRef);
  
      if (userProfileSnapshot.exists()) {
        const profileData = userProfileSnapshot.data();
        return { id: userProfileSnapshot.id, ...profileData };
      }
    } catch (error) {
      console.error("Error retrieving user profile:", error);
      throw error;
    }
  };
  
  export const updateUserProfile = async (uid, profileData) => {
    try {
      const userProfileRef = doc(firebaseDB, "userProfiles", uid);
      await setDoc(userProfileRef, profileData, { merge: true });
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };
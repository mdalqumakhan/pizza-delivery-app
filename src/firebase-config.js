import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaYEuivXR9UmOPFUuG86fr5AKJZsJbldU",
  authDomain: "food-ordering-app-897dd.firebaseapp.com",
  projectId: "food-ordering-app-897dd",
  storageBucket: "food-ordering-app-897dd.appspot.com",
  messagingSenderId: "826419428348",
  appId: "1:826419428348:web:4f14f35698dbec1e9d9079",
  measurementId: "G-XS70K04E9L"
};

export const app = initializeApp(firebaseConfig);
//import { getAnalytics } from "firebase/analytics";
import React, { useState, useEffect } from "react";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  User,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  getAuth,
  signOut,
} from "firebase/auth";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";



const firebaseConfig = {
  apiKey: "AIzaSyDOFAQCsHsLH2iFNLj1OwQFbT4n5aL1oeo",
  authDomain: "house-forum-project.firebaseapp.com",
  projectId: "house-forum-project",
  storageBucket: "house-forum-project.appspot.com",
  messagingSenderId: "417267344777",
  appId: "1:417267344777:web:28af71da828f99740c6d58",
  measurementId: "G-VJT77M47Q7"
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

type Props = {
  readonly children: React.ReactNode;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const Authentication = ({user, setUser, children }: Props) => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [GoogleAuthProvider.PROVIDER_ID,
      //FacebookAuthProvider.PROVIDER_ID
    ],
  };

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <>
      {user ? (
        <>
          <div className="inRowT">
            <h1 className="column"></h1>
            <h1 className="column">House Portal</h1>
            <div className="column" >
              <button className="buttons" onClick={() => signOut(auth)}>Sign Out</button>
            </div>
          </div>
          <h2>Hi {user.displayName}! Welcome to your house's information portal.</h2>
          {children}
        </>
      ) : (
        <>
          <h1>House Portal</h1>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </>
      )}
    </>
  );
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default Authentication;


import { createContext, useEffect, useState } from "react";
import app from "./firebase.confiq";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSign = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSign = (githubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const loggedUser = currentUser?.email || user?.email;
      const loggedInUser = { email: loggedUser };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loggedInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const AllInfo = {
    createUser,
    signUser,
    user,
    setUser,
    googleSign,
    githubSign,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={AllInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

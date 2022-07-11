import { onAuthStateChanged } from "firebase/auth";
import React, { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../../firebase";
import Login from "../../routes/Login";

const StartUp: FC = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setLoggedIn(user !== null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading ...</div>
  }

  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<h1 onClick={() => auth.signOut()}>Studentscape</h1>} />
      </Routes>
    )
  }

  return (
    <Login />
  )
};

export default StartUp;

import { onAuthStateChanged } from "firebase/auth";
import React, { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../firebase";
import Home from "../routes/Home";
import Login from "../routes/Login";

const App: FC = () => {
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
    return <div>Loading ...</div>;
  }

  if (loggedIn && auth.currentUser.emailVerified) {
    return (
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    );
  }

  return <Login />;
};

export default App;

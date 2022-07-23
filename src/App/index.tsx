import React, { FC, Suspense, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Main = React.lazy(() => import("../routes/Main"));

import Landing from "../routes/Landing";

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

  if (loggedIn && auth.currentUser.emailVerified) {
    return (
      <Suspense fallback={<Landing spinner={true} />}>
        <Main />
      </Suspense>
    );
  }

  return <Landing spinner={loading} />;
};

export default App;

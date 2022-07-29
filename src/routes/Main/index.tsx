import React, { FC, Suspense, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { userExists } from "../../api/user";
import NavBar from "../../components/NavBar";
import ProfileForm from "../../components/ProfileCard/form";
import Spinner from "../../components/Spinner";
import { auth } from "../../firebase";

const Home = React.lazy(() => import("../Home"));
const Groups = React.lazy(() => import("../Groups"));
const Search = React.lazy(() => import("../Search"));
const Notifications = React.lazy(() => import("../Notifications"));
const Profile = React.lazy(() => import("../Profile"));

const Main: FC = () => {
  const [registered, setRegistered] = useState<boolean>();

  useEffect(() => {
    userExists(auth.currentUser.uid).then((found) => setRegistered(found));
  }, []);

  if (registered === undefined) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (registered === false) {
    return (
      <div className="h-full m-auto max-w-xl">
        <div className="pt-20">
          <div className="bg-neutral-700 rounded-lg text-neutral-200 pl-3 pr-3 pb-3">
            <ProfileForm
              firstName=""
              lastName=""
              photoURL={auth.currentUser.photoURL || ""}
              onSave={async () => location.reload()}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row h-full text-neutral-200">
      <HashRouter>
        <NavBar />

        <div className="flex-auto relative overflow-auto">
          <Suspense
            fallback={
              <div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/search" element={<Search />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </div>
      </HashRouter>
    </div>
  );
};

export default Main;

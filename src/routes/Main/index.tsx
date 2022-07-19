import React, { FC, Suspense } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Spinner from "../../components/Spinner";

const Home = React.lazy(() => import( "../Home"));
const Groups = React.lazy(() => import( "../Groups"));
const Search = React.lazy(() => import( "../Search"));
const Notifications = React.lazy(() => import( "../Notifications"));
const Profile = React.lazy(() => import( "../Profile"));

const Main: FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-full text-neutral-200">
      <HashRouter>

        <div className="bg-blue-500 p-3">
          <div className="flex justify-around md:justify-start md:flex-col md:space-y-5">
            <Link to="/">
              <span className="material-icons">home</span>
            </Link>
            <Link to="/groups">
              <span className="material-icons">groups</span>
            </Link>
            <Link to="/search">
              <span className="material-icons">search</span>
            </Link>
            <Link to="/notifications">
              <span className="material-icons">notifications</span>
            </Link>
            <Link to="/profile">
              <span className="material-icons">account_circle</span>
            </Link>
          </div>
        </div>

        <div className="flex-auto relative">
          <Suspense fallback={<div className="absolute top-1/2 left-1/2 -mt-5 -ml-5"><Spinner /></div>}>
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

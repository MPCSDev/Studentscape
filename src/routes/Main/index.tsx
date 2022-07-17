import React, { FC } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Groups from "../Groups";
import Home from "../Home";
import Notifications from "../Notifications";
import Profile from "../Profile";
import Search from "../Search";

const Main: FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-full text-neutral-200">
      <HashRouter>
        <div className="bg-blue-500 p-3">
        <div className="flex justify-around md:justify-start md:flex-col md:space-y-5">
          <Link to="/"><span className="material-icons">home</span></Link>
          <Link to="/groups"><span className="material-icons">groups</span></Link>
          <Link to="/search"><span className="material-icons">search</span></Link>
          <Link to="/notifications"><span className="material-icons">notifications</span></Link>
          <Link to="/profile"><span className="material-icons">account_circle</span></Link>
          </div>
        </div>
        <div className="flex-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/search" element={<Search />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
      </HashRouter>
    </div>
  );
};

export default Main;

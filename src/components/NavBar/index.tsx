import React, { FC } from "react";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  return (
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
  );
};

export default NavBar;

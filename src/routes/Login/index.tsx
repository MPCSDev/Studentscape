import React, { FC } from "react";
import { Link } from "react-router-dom";

const Login: FC = () => {
  return (
    <div className="h-screen w-screen">
      <div className="p-3 border-b-2">
        <h1 className="font-bold text-2xl">Login</h1>
      </div>
      <div className="p-3">
        <Link to="/">
          <button className="bg-blue-500 text-white hover:bg-blue-700 p-3 rounded-lg">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

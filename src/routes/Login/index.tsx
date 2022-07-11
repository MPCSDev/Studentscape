import React, { FC } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login: FC = () => {

  return (
    <div className="max-w-[500px] w-full m-auto px-3">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Login;

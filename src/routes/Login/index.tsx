import React, { FC, useState } from "react";
import { auth } from "../../firebase";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import VerifyEmail from "./VerifyEmail";

enum Form {
  Login = "LOGIN FORM",
  Register = "REGISTER FORM",
}

const Login: FC = () => {
  const [showForm, setShowForm] = useState(Form.Login);

  if (auth.currentUser !== null) {
    return (
      <div className="max-w-[500px] w-full m-auto px-3 space-y-3">
        <VerifyEmail />
      </div>
    );
  }

  return (
    <div className="max-w-[500px] w-full m-auto px-3 space-y-3">
      {showForm === Form.Login && (
        <>
          <LoginForm />
          <p className="my-3 font-semibold">
            Do not have an account ?
            <button
              className="text-blue-500 px-2"
              onClick={() => setShowForm(Form.Register)}
            >
              Register
            </button>
          </p>
        </>
      )}
      {showForm === Form.Register && (
        <>
          <RegisterForm />
          <p className="my-3 font-semibold">
            Already have an account ?
            <button
              className="text-blue-500 px-2"
              onClick={() => setShowForm(Form.Login)}
            >
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;

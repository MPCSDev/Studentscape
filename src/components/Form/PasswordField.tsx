import { Field } from "formik";
import React, { FC, useState } from "react";

const PasswordField: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex border border-neutral-200 rounded-lg bg-white">
      <Field
        name="password"
        className="w-full focus:outline-none py-2 px-4 rounded-lg"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
      />

      <button
        type="button"
        className="material-icons text-neutral-700 flex justify-center items-center mr-4"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "visibility_off" : "visibility"}
      </button>
    </div>
  );
};

export default PasswordField;

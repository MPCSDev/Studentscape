import { Field } from "formik";
import React, { FC } from "react";

interface IProps {
  error: string | undefined;
}

const EmailField: FC<IProps> = ({ error }) => {
  return (
    <div className="flex border border-neutral-200 bg-white rounded-lg">
      <Field
        name="email"
        className="w-full focus:outline-none py-2 px-4 rounded-lg"
        placeholder="Email"
        validate={validateEmail}
      />

      {error && (
        <span
          className="material-icons text-red-500 flex justify-center items-center mr-4 cursor-help"
          title={error}
        >
          error
        </span>
      )}
    </div>
  );
};

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

export default EmailField;

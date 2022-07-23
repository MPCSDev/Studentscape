import React, { FC } from "react";

interface IProps {
  error: string;
}

const ErrorBar: FC<IProps> = ({ error }) => {
  return (
    <div
      className="bg-red-100 border-l-4 border-r-4 text-center border-red-500 text-red-700 p-2"
      role="alert"
    >
      <p>{error}</p>
    </div>
  );
};

export default ErrorBar;

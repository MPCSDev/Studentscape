import React, { FC, useEffect, useState } from "react";

interface IProps {
  disabled?: boolean;
  onClick?: () => Promise<void>;
  color?: string;
  children: React.ReactNode;
}

const SubmitButton: FC<IProps> = ({ disabled, onClick, color, children }) => {
  let colorString = "bg-blue-500 hover:bg-blue-700 disabled:bg-blue-400";
  if (color === 'red') {
    colorString = `bg-red-500 hover:bg-red-700 disabled:bg-red-400`;
  }

  return (
    <button
      className={`rounded-md w-full p-2 font-semibold text-white flex justify-center ${colorString}`}
      disabled={disabled}
      onClick={onClick}
      type="submit"
    >
      {disabled ? (
        <svg
          className="w-5 h-5 -ml-1 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default SubmitButton;
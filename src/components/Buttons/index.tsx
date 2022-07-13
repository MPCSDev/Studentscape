import React, { FC } from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type IProps = ButtonProps & {
  color?: string;
  children: React.ReactNode;
};

const colorString: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-800 disabled:bg-blue-400",
  red: "bg-red-600 hover:bg-red-800 disabled:bg-red-400",
};

const Button: FC<IProps> = ({ color, children, ...props }) => {
  if (!color) {
    color = "blue";
  }

  return (
    <button
      {...props}
      className={`rounded-md w-full p-2 font-semibold text-white flex justify-center ${colorString[color]}`}
    >
      <>{children}</>
    </button>
  );
};

export default Button;

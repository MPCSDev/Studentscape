import React, { Children, FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const InfoBar: FC<IProps> = ({ children }) => {
  return (
    <div
      className="bg-blue-100 border-l-4 border-r-4 border-blue-500 text-blue-700 text-center p-4 mb-3"
      role="alert"
    >
      {children}
    </div>
  );
};

export default InfoBar;

import React, { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="h-10 w-10 border-t-4 border-4 border-l-transparent border-cyan-500 rounded-full animate-spin" />
  );
};

export default Spinner;

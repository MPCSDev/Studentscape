import React, { FC } from "react";
import Button from ".";

interface IProps {
  isSubmitting: boolean;
  children: React.ReactNode;
}

const SubmitButton: FC<IProps> = ({ isSubmitting, children }) => {
  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="animate-spin h-5 w-5 rounded-full border-4 border-l-transparent border-neutral-100"></span>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};

export default SubmitButton;

import React, { FC, useState } from "react";
import Button from ".";

interface IProps {
  color?: string;
  onClick: () => Promise<any>;
  children: React.ReactNode;
}

const LoadingButton: FC<IProps> = ({ color, onClick, children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      type="button"
      color={color}
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        await onClick();
        setLoading(false);
      }}
    >
      {loading ? (
        <span className="animate-spin h-5 w-5 rounded-full border-4 border-l-transparent border-neutral-100"></span>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};

export default LoadingButton;

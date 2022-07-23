import React, { FC, useState } from "react";

import Spinner from "../components/Spinner";

interface LoadingProps {
  spinner?: React.ReactNode;

  children: React.ReactNode;
}

function useLoading<T>(
  func: (...args: any[]) => Promise<T>,
  ...args: any[]
): [FC<LoadingProps>, T, () => Promise<void>] {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);

  const trigger = async () => {
    setLoading(true);

    setData(await func(...args));

    setLoading(false);
  };

  const Loading: FC<LoadingProps> = ({ spinner, children }) => {
    if (loading) return spinner ? <>{spinner}</> : <Spinner />;

    return <>{children}</>;
  };

  return [Loading, data, trigger];
}

export default useLoading;

import React, { FC, Suspense } from "react";
import Spinner from "../../components/Spinner";
import { auth } from "../../firebase";

const LoginForm = React.lazy(() => import("./LoginForm"));
const VerifyEmail = React.lazy(() => import("./VerifyEmail"));

interface IProps {
  spinner: boolean;
}

const Landing: FC<IProps> = ({ spinner }) => {
  return (
    <div className="h-full max-w-[500px] m-auto flex flex-col">
      <div className="h-1/3 flex justify-center items-center">
        <h1 className="font-bold text-4xl text-center text-neutral-200">
          Studentscape
        </h1>
      </div>
      <div className="h-2/3 px-3 text-neutral-200 flex justify-center items-center">
        {spinner ? (
          <Spinner />
        ) : (
          <Suspense fallback={<Spinner />}>
            {auth.currentUser ? <VerifyEmail /> : <LoginForm />}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Landing;

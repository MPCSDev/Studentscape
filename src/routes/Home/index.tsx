import { signOut } from "firebase/auth";
import React, { FC } from "react";
import LoadingButton from "../../components/Buttons/LoadingButton";
import { auth } from "../../firebase";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-full text-neutral-200">
      <div className="p-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">Studentscape</h1>
        <span>
        <LoadingButton
          onClick={async () => {
            await signOut(auth);
          }}
        >
          Sign Out
        </LoadingButton>
        </span>
      </div>

      <div className="flex-auto flex justify-center items-center"> Some Content for Home !</div>
    </div>
  );
};

export default Home;

import { signOut } from "firebase/auth";
import React, { FC } from "react";
import SubmitButton from "../../components/Buttons/SubmitButton";
import { auth } from "../../firebase";

const Home: FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">Studentscape</h1>
        <span>
        <SubmitButton
          color="red"
          onClick={async () => {
            await signOut(auth);
          }}
        >
          Sign Out
        </SubmitButton>
        </span>
      </div>

      <div className="bg-neutral-100 flex-auto flex justify-center items-center"> Some Content for Home !</div>
    </div>
  );
};

export default Home;

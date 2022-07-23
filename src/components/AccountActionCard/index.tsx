import React, { FC } from "react";
import { auth } from "../../firebase";
import LoadingButton from "../Buttons/LoadingButton";

const AccountActionCard: FC = () => {
  return (
    <div className="bg-neutral-700 max-w-xl w-full p-3 rounded-md">
      <LoadingButton
        color="red"
        onClick={async () => {
          await auth.signOut();
        }}
      >
        Sign Out
      </LoadingButton>
    </div>
  );
};

export default AccountActionCard;

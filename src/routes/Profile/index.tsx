import React, { FC, useState } from "react";
import LoadingButton from "../../components/Buttons/LoadingButton";
import ProfileCard from "../../components/ProfileCard";
import { auth } from "../../firebase";

const Profile: FC = () => {
  return (
    <div className="h-full relative max-w-xl m-auto space-y-4">
      <ProfileCard />

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

    </div>
  );
};

export default Profile;

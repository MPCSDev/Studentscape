import React, { FC, useState } from "react";
import { auth } from "../../firebase";

import LoadingButton from "../../components/Buttons/LoadingButton";
import EditForm from "./EditForm";
import ProfilePhoto from "../../components/ProfilePhoto";

const Profile: FC = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="flex flex-col p-3 items-center space-y-3">
      <div className="bg-neutral-700 max-w-xl w-full p-3 rounded-md flex flex-col items-center mt-20">
        {editMode ? (
          <EditForm closeForm={() => setEditMode(false)} />
        ) : (
          <div className="space-y-3 w-full flex flex-col items-center">
            <ProfilePhoto url={auth.currentUser.photoURL} />

            <div className="text-center">
              <p className="font-bold text-xl">
                {auth.currentUser.displayName}
              </p>
              <p className="font-thin">{auth.currentUser.email}</p>
            </div>

            <LoadingButton onClick={async () => setEditMode(true)}>
              Edit Profile
            </LoadingButton>
          </div>
        )}
      </div>

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

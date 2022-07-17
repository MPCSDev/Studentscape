import React, { FC } from "react";
import { auth } from "../../firebase";

import profilePlaceholder from "../../assets/profile-placeholder.png";
import LoadingButton from "../../components/Buttons/LoadingButton";

const Profile: FC = () => {
  return (
    <div className="flex flex-col p-3 items-center space-y-3">
      <div className="bg-neutral-700 max-w-xl w-full p-3 rounded-md flex flex-col items-center mt-20">
        <div className="bg-neutral-50 h-20 w-20 -mt-12 rounded-full overflow-hidden flex justify-center items-center border-2 border-blue-400">
          <img src={auth.currentUser.photoURL || profilePlaceholder} className="object-cover" />
        </div>
        <div className="flex flex-col items-center py-3">
          <span className="font-bold">{auth.currentUser.displayName}</span>
          <span className="font-thin">{auth.currentUser.email}</span>
        </div>
      </div>

      <div className="bg-neutral-700 max-w-xl w-full p-3 rounded-md flex justify-center">
        <LoadingButton color="red" onClick={async () => {
          await auth.signOut();
        }}>Sign Out</LoadingButton>
      </div>
    </div>
  );
}

export default Profile;

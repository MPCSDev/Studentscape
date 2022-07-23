import React, { FC } from "react";
import { auth } from "../../firebase";
import LoadingButton from "../Buttons/LoadingButton";

interface IProps {
  firstName: string;
  lastName: string;
  photoURL: string;
  editProfile: () => Promise<void>;
}

const ProfileDisplay: FC<IProps> = ({
  firstName,
  lastName,
  photoURL,
  editProfile,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden -mt-10 border-4 border-neutral-700 bg-neutral-500 flex justify-center items-center">
          <img src={photoURL} />
        </div>
      </div>
      <div className="text-center pb-3">
        <p className="font-bold text-xl">
          {firstName} {lastName}
        </p>
        <p className="font-thin">{auth.currentUser.email}</p>
      </div>

      <LoadingButton onClick={editProfile}>Edit Profile</LoadingButton>
    </div>
  );
};

export default ProfileDisplay;

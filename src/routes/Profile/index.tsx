import React, { FC } from "react";
import AccountActionCard from "../../components/AccountActionCard";
import ProfileCard from "../../components/ProfileCard";

const Profile: FC = () => {
  return (
    <div className="h-full relative max-w-xl m-auto space-y-4">
      <ProfileCard />
      <AccountActionCard />
    </div>
  );
};

export default Profile;

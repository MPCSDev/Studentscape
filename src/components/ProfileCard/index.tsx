import React, { FC, useEffect, useState } from "react";
import { getProfile, ProfileData } from "../../api/user";
import { auth } from "../../firebase";
import ProfileDisplay from "./display";
import ProfileForm from "./form";
import useLoading from "../../hooks/useLoading";
import BarSpinner from "../BarSpinner";

const ProfileCard: FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [Loading, data, trigger] = useLoading<ProfileData>(
    getProfile,
    auth.currentUser.uid
  );

  useEffect(() => {
    trigger();
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-neutral-700 rounded-lg text-neutral-200 pl-3 pr-3 pb-3">
        <Loading
          spinner={
            <div className="flex justify-center items-center pt-3">
              <BarSpinner />
            </div>
          }
        >
          {showForm ? (
            <ProfileForm
              {...data}
              onSave={async () => {
                await trigger();
                setShowForm(false);
              }}
            />
          ) : (
            <ProfileDisplay
              {...data}
              editProfile={async () => setShowForm(true)}
            />
          )}
        </Loading>
      </div>
    </div>
  );
};

export default ProfileCard;

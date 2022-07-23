import React, { FC } from "react";

interface IProps {
  url: string | undefined;
}

const ProfilePhoto: FC<IProps> = ({ url }) => {
  return (
    <div
      className={`
      bg-neutral-500 
      h-20 w-20 -mt-12 
      rounded-full 
      overflow-hidden 
      flex justify-center
      items-center 
      border-4 
      border-neutral-700`}
    >
      {url && <img src={url} className="object-fill" />}
    </div>
  );
};

export default ProfilePhoto;

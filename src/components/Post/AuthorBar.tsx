import React, { FC } from "react";

interface IProps {
  photoURL: string;
  displayName: string;
  communityName: string;

  showMore?: boolean;
}

const AuthorBar: FC<IProps> = ({
  photoURL,
  displayName,
  communityName,
  showMore,
}) => {
  return (
    <div className="flex justify-between items-center px-3">
      <span className="flex items-center space-x-3">
        <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-600">
          <img src={photoURL} className="object-fill" />
        </div>

        <div>
          <p className="font-semibold">{displayName}</p>

          {communityName && (
            <p className="font-thin text-sm">{communityName}</p>
          )}
        </div>
      </span>

      {(showMore === undefined || showMore === true) && (
        <button className="material-icons">more_vert</button>
      )}
    </div>
  );
};

export default AuthorBar;

import React, { FC, useState } from "react";

interface IProps {
  text: string;
  imageURL?: string;
}

const PostDisplay: FC<IProps> = ({ text, imageURL }) => {
  const [like, setLike] = useState<boolean>();

  return (
    <>
      <p className="p-3">{text}</p>

      {imageURL && <img src={imageURL} className="py-3 w-full" />}

      <div className="px-3 flex justify-center space-x-3">
        <button
          className={`material-icons ${like === true ? "text-green-500" : ""}`}
          onClick={() => setLike(like ? undefined : true)}
        >
          thumb_up
        </button>
        <button
          className={`material-icons ${like === false ? "text-red-500" : ""}`}
          onClick={() => setLike(like === false ? undefined : false)}
        >
          thumb_down
        </button>
      </div>
    </>
  );
};

export default PostDisplay;

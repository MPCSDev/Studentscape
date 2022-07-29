import React, { FC, useState } from "react";
import AuthorBar from "./AuthorBar";
import PostDisplay from "./Display";
import PostForm from "./Form";

interface IProps {
  author: {
    photoURL: string;
    displayName: string;
  };
  text: string;
  communityName?: string;
  imageURL?: string;
}

const Post: FC<IProps> = ({ author, text, communityName, imageURL }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-neutral-700 rounded-md py-2">
      <AuthorBar
        photoURL={author.photoURL}
        displayName={author.displayName}
        communityName={communityName}
        showMore={!showForm}
      />

      {showForm ? (
        <PostForm />
      ) : (
        <PostDisplay text={text} imageURL={imageURL} />
      )}
    </div>
  );
};

export default Post;

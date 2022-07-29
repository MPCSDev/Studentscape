import React, { FC } from "react";
import Post from "../../components/Post";
import { auth } from "../../firebase";

const data = {
  author: {
    photoURL: auth.currentUser.photoURL,

    displayName: auth.currentUser.displayName,
  },
  text: "Here is some text for the post ...",
  imageURL: auth.currentUser.photoURL,
  communityName: "Shishya",
};

const Home: FC = () => {
  return (
    <div className="max-w-2xl m-auto py-5 space-y-3">
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
      <Post {...data} />
    </div>
  );
};

export default Home;

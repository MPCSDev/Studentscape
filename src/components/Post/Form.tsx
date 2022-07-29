import { useFormik } from "formik";
import React, { FC, useState } from "react";
import SubmitButton from "../Buttons/SubmitButton";

const PostForm: FC = () => {
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: () => {},
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-3">

      {/* some way to select community */}

      <textarea
        name="text"
        className="w-full bg-transparent focus:outline-none p-3"
        placeholder="Write some text for post ..."
        rows={5}
        value={formik.values.text}
        onChange={formik.handleChange}
      />

      {image && <img src={image} className="w-full" />}

      <label className="flex justify-between px-3">
        <span className="px-3 font-semibold">Image </span>
        <input
          type="file"
          onChange={(e) => {
            const fr = new FileReader();

            fr.readAsDataURL(e.target.files[0]);
            fr.onload = () => {
              setImage(fr.result as string);
            };
          }}
        />
      </label>

      <div className="px-3">
        <SubmitButton isSubmitting={formik.isSubmitting}>Save</SubmitButton>
      </div>
    </form>
  );
};

export default PostForm;

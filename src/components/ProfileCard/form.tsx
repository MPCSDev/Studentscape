import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { userUpdate } from "../../api/user";
import { app, auth } from "../../firebase";
import SubmitButton from "../Buttons/SubmitButton";
import ErrorBar from "../ErrorBar";

interface IProps {
  firstName: string;
  lastName: string;
  photoURL: string;
  onSave: () => Promise<void>;
}

const ProfileForm: FC<IProps> = ({ firstName, lastName, photoURL, onSave }) => {
  const [photo, setPhoto] = useState(photoURL);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      profileImage: "",
    },

    onSubmit: async (values) => {
      let url = photoURL;

      try {
        if (photo !== photoURL) {
          const storageRef = ref(
            getStorage(app),
            `profile/${auth.currentUser.uid}`
          );
          await uploadString(storageRef, photo, "data_url");

          url = await getDownloadURL(storageRef);
          setPhoto(url);
        }

        await userUpdate({
          firebaseUID: auth.currentUser.uid,
          firstName: values.firstName,
          lastName: values.lastName,
          email: auth.currentUser.email,
          photoURL: url,
        });

        await onSave();
      } catch (err) {
        setError(err);
      }
    },
  });

  return (
    <form className="space-y-3" onSubmit={formik.handleSubmit}>
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden -mt-10 border-4 border-neutral-700 flex items-center justify-center bg-neutral-500">
            <img src={photo} className="object-fill" />
          </div>

          <label htmlFor="profile-photo">
            <span className="material-icons absolute right-0 bottom-0 cursor-pointer">
              add_a_photo
            </span>
          </label>

          <input
            id="profile-photo"
            className="hidden"
            type="file"
            name="profileImage"
            onChange={(e) => {
              const fr = new FileReader();

              fr.readAsDataURL(e.target.files[0]);
              fr.onload = () => {
                setPhoto(fr.result as string);
              };

              formik.handleChange(e);
            }}
          />
        </div>
      </div>

      {error && <ErrorBar error={error} />}

      <div className="flex space-x-2">
        <input
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          placeholder="First Name"
          className="w-full focus:outline-none py-2 px-4 rounded-lg text-black"
        />
        <input
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          placeholder="Last Name"
          className="w-full focus:outline-none py-2 px-4 rounded-lg text-black"
        />
      </div>

      <SubmitButton isSubmitting={formik.isSubmitting}>Save</SubmitButton>
    </form>
  );
};

export default ProfileForm;

import React, { FC, useState } from "react";
import ProfilePhoto from "../../components/ProfilePhoto";
import { useFormik } from "formik";
import { app, auth } from "../../firebase";
import SubmitButton from "../../components/Buttons/SubmitButton";
import ErrorBar from "../../components/ErrorBar";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { updateProfile } from "firebase/auth";

interface IProps {
  closeForm: () => void;
}

const EditForm: FC<IProps> = ({ closeForm }) => {
  const [photo, setPhoto] = useState(auth.currentUser.photoURL);
  const [error, setError] = useState("");

  const [firstName, lastName] = auth.currentUser.displayName.split(" ");

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName || "",
      profileImage: "",
    },
    onSubmit: async (values) => {
      try {
        let url = auth.currentUser.photoURL;

        if (photo !== url) {
          const storageRef = ref(getStorage(app), `profile/${auth.currentUser.uid}`);
          await uploadString(storageRef, photo, "data_url");

          url = await getDownloadURL(storageRef);
          setPhoto(url);
        }

        await updateProfile(auth.currentUser, {
          displayName: values.firstName + " " + values.lastName,
          photoURL: url,
        });

        closeForm();
      } catch (error) {
        setError(error.code);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-2">
      <div className="flex justify-center w-full">
        <div className="relative">
          <ProfilePhoto url={photo} />

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

      <div className="flex flex-row items-center py-3 space-x-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          className="w-full focus:outline-none py-2 px-4 rounded-lg text-black"
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          className="w-full focus:outline-none py-2 px-4 rounded-lg text-black"
          onChange={formik.handleChange}
        />
      </div>

      <SubmitButton isSubmitting={formik.isSubmitting}>Save</SubmitButton>
    </form>
  );
};

export default EditForm;

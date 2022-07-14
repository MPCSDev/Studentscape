import LoadingButton from "../../components/Buttons/LoadingButton";
import SubmitButton from "../../components/Buttons/SubmitButton";
import PasswordField from "../../components/Form/PasswordField";
import EmailField from "../../components/Form/EmailField";
import { auth, googleProvider } from "../../firebase";
import ErrorBar from "../../components/ErrorBar";
import React, { FC, useState } from "react";
import { Form, Formik } from "formik";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import InfoBar from "../../components/InfoBar";

const LoginForm: FC = () => {
  const [error, setError] = useState<string>();
  const [info, setInfo] = useState<string>();

  return (
    <div className="space-y-4 flex-auto">
      <h2 className="font-bold text-xl text-center">Login / Register</h2>

      {error && <ErrorBar error={error} />}
      {info && <InfoBar>{info}</InfoBar>}

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
          } catch (error) {
            if (error.code === "auth/user-not-found") {
              try {
                await createUserWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
              } catch (error) {
                setError(error.code);
              }
            } else {
              setError(error.code);
            }
          }
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className="space-y-2 text-black">
            <EmailField error={errors.email} />
            <PasswordField />
            <SubmitButton isSubmitting={isSubmitting}>Sign In</SubmitButton>

            <p className="my-3 font-semibold text-neutral-200">
              Forgot Password ?
              <button
                className="text-blue-500 px-2"
                type="button"
                onClick={async () => {
                  try {
                    await sendPasswordResetEmail(auth, values.email);
                    setInfo(`Password Reset Email sent at ${values.email}`);
                  } catch (error) {
                    setError(error.code);
                  }
                }}
              >
                Reset
              </button>
            </p>
          </Form>
        )}
      </Formik>

      <hr />

      <LoadingButton
        onClick={async () => {
          try {
            await signInWithRedirect(auth, googleProvider);
          } catch (error) {
            alert(error.code);
          }
        }}
      >
        Sign in with Google
      </LoadingButton>
    </div>
  );
};

export default LoginForm;

import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Formik } from "formik";
import React, { FC, useState } from "react";
import SubmitButton from "../../components/Buttons/SubmitButton";
import ErrorBar from "../../components/ErrorBar";
import EmailField from "../../components/Form/EmailField";
import PasswordField from "../../components/Form/PasswordField";
import { auth } from "../../firebase";

const LoginForm: FC = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h2 className="font-bold text-center text-xl">Login</h2>

      {error && <ErrorBar error={error} />}

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
          } catch (error) {
            setError(error.code);
          }
          setLoading(false);
        }}
      >
        {({ errors }) => (
          <Form className="space-y-2">
            <EmailField error={errors.email} />
            <PasswordField />
            <SubmitButton disabled={loading}>Sign In</SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;

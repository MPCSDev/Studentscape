import { createUserWithEmailAndPassword } from "firebase/auth";
import { Field, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import SubmitButton from "../../components/Buttons/SubmitButton";
import ErrorBar from "../../components/ErrorBar";
import EmailField from "../../components/Form/EmailField";
import PasswordField from "../../components/Form/PasswordField";
import { auth } from "../../firebase";

const RegisterForm: FC = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h2 className="font-bold text-center text-xl">Register</h2>

      {error && <ErrorBar error={error} />}

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);

          try {
            await createUserWithEmailAndPassword(
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
            {/* 
              <div className="flex space-x-2">
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 border border-neutral-200 rounded-lg py-2 px-4 focus:outline-none"
                />

                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 border border-neutral-200 rounded-lg py-2 px-4 focus:outline-none"
                />
              </div> 
            */}

            <EmailField error={errors.email} />

            <PasswordField />

            <SubmitButton disabled={loading}>Sign Up</SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default RegisterForm;

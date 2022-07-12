import { sendEmailVerification } from "firebase/auth";
import React, { FC, useEffect, useState } from "react";
import SubmitButton from "../../components/Buttons/SubmitButton";
import ErrorBar from "../../components/ErrorBar";
import InfoBar from "../../components/InfoBar";
import { auth } from "../../firebase";

enum Stage {
  SendEmail = "SEND EMAIL",
  EmailSent = "EMAIL SENT",
}

const VerifyEmail: FC = () => {
  const [stage, setStage] = useState(Stage.SendEmail);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(auth.currentUser);
  }, []);

  return (
    <>
      <h2 className="font-bold text-center text-xl">Verify Email</h2>

      {stage === Stage.SendEmail && (
        <>
          {error && <ErrorBar error={error} />}

          <InfoBar>
            <p>
              Please verify your email ID:{" "}
              <span className="font-bold">{auth.currentUser.email}</span>
            </p>
          </InfoBar>

          <SubmitButton
            disabled={loading}
            onClick={async () => {

              setLoading(true);

              try {
                await sendEmailVerification(auth.currentUser);
                setStage(Stage.EmailSent);
              } catch (error) {
                setError(error.code);
              }

              setLoading(false);
            }}
          >
            Send Verification Email
          </SubmitButton>

          <SubmitButton
            disabled={loading}
            color="red"
            onClick={async () => {

              setLoading(true);

              try {
                await auth.signOut();
              } catch (error) {
                setError(error.code);
              }

              setLoading(false);
            }}
          >
            Sign Out
          </SubmitButton>
        </>
      )}

      {stage === Stage.EmailSent && (
        <>
          {error && <ErrorBar error={error} />}

          <InfoBar>
            <p>Verification Email is sent successfully !</p>
          </InfoBar>

          <SubmitButton
            disabled={loading}
            onClick={async () => {
              window.location.reload();
            }}
          >
            Reload
          </SubmitButton>
        </>
      )}

    </>
  );
};

export default VerifyEmail;

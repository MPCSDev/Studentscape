import { sendEmailVerification } from "firebase/auth";
import React, { FC, useEffect, useState } from "react";
import LoadingButton from "../../components/Buttons/LoadingButton";
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

  useEffect(() => {
    console.log(auth.currentUser);
  }, []);

  return (
    <div className="space-y-4 flex-auto">

      {stage === Stage.SendEmail && (
        <>
          {error && <ErrorBar error={error} />}

          <InfoBar>
            <p>
              Please verify your email ID:{" "}
              <span className="font-bold">{auth.currentUser.email}</span>
            </p>
          </InfoBar>

          <LoadingButton
            onClick={async () => {
              try {
                await sendEmailVerification(auth.currentUser);
                setStage(Stage.EmailSent);
              } catch (error) {
                setError(error.code);
              }
            }}
          >
            Send Verification Email
          </LoadingButton>

          <LoadingButton
            color="red"
            onClick={async () => {
              try {
                await auth.signOut();
              } catch (error) {
                setError(error.code);
              }
            }}
          >
            Sign Out
          </LoadingButton>
        </>
      )}

      {stage === Stage.EmailSent && (
        <>
          {error && <ErrorBar error={error} />}

          <InfoBar>
            <p>Verification Email is sent successfully !</p>
          </InfoBar>

          <LoadingButton
            onClick={async () => {
              window.location.reload();
            }}
          >
            Reload
          </LoadingButton>
        </>
      )}

    </div>
  );
};

export default VerifyEmail;

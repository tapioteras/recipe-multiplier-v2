import { useRouter } from "next/router";

import { uiConfig } from "../config/firebaseAppConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getAuth } from "firebase/auth";
import { useLoginContext } from "../context/loginContext";

const LoginPage = () => {
  const { user, loading, error } = useLoginContext();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  else if (error) return <div>{`Error: ${error}`}</div>;
  else if (user) {
    // user is already logged in, redirect to home page
    router.push("/");
  }

  const authConfig = uiConfig();

  return (
    <div>
      <div>
        <h1>Log In to</h1>
      </div>
      <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={getAuth()} />
    </div>
  );
};

export default LoginPage;

import { useRouter } from "next/router";

import { auth, uiConfig } from "../config/firebaseAppConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
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

  return (
    <div>
      <div>
        <h1>Log In to</h1>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig()} firebaseAuth={auth} />
    </div>
  );
};

export default LoginPage;

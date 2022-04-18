import { useAuth0 } from "@auth0/auth0-react";
export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated ,logout} = useAuth0();
  const login = () => {
    loginWithRedirect({});
    console.log("clicked");
  };
  return !isAuthenticated ? (
    <button aria-label="sign in button" className="btn-primary-rounded" onClick={login}>
      Sign in
    </button>
  ) : (
    <button aria-label="sign out button" className="btn-primary-rounded" onClick={() => logout()}>
      Sign out
    </button>
  );
}

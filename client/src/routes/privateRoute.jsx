import { Route } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/loading";

export default function PrivateRoute({ component, ...rest }) {

  const { isAuthenticated } = useAuth0();
  return (
    <Route
      component={ isAuthenticated ? component : withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      }) }
      { ...rest }
    />
  );
}

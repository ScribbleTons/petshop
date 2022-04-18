import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./pages/home";
import PrivateRoute from "./routes/privateRoute";
import AppWrapper from "./components/appWrapper";
import NotFoundRoute from "./pages/notfound";
import { Auth0Provider } from "@auth0/auth0-react";
import Product from "./pages/product";
import ContactPage from './pages/contact';
import About from "./pages/about";


function App() {
  const history = useHistory();
  // const onRedirectCallback = (appState) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };
  return (
    <Router>
      <Auth0Provider
        domain="dev-d0a6wggv.us.auth0.com"
        clientId="xMFwxzbeWPOYcrml6I2GmQ611yvs0tfy"
        redirectUri={window.location.origin}
        // onRedirectCallback={onRedirectCallback}
      >
        <AppWrapper>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/about" exact component={About} />
            <PrivateRoute path="/products" component={Product} />
            <Route path="*" exact component={NotFoundRoute} />
          </Switch>
        </AppWrapper>
      </Auth0Provider>
    </Router>
  );
}

export default App;

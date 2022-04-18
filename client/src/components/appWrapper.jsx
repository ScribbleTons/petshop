import "./../asserts/styles/shared/global.css";
import Footer from "./footer";
import Header from "./header";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./loginBtn";
import UserAvatar from "./userAvatar";
import { TinyLoader } from "./loading";

export default function AppWrapper({ children }) {
  const styles = {
    position: "fixed",
    backgroundColor: "#E3DCDC",
    width: "100vw",
    height: "auto",
  };
  const { user, isLoading } = useAuth0();

  return (
    <div style={styles}>
      <Header />
      <div className="main">
        <div className="menu" id="menu">
          <div className="menu-profile-section">
            {isLoading && <TinyLoader />}
            {user && (
              <>
                <UserAvatar picture={user.picture} name={user.name} />
                <NavLink to="/profile" className="menu-link">
                  {user.given_name}
                </NavLink>
              </>
            )}
          </div>

          <div className="menu-links-group">
            <NavLink to="/" className="menu-link">
              Home
            </NavLink>
            <NavLink to="/products" className="menu-link">
              Products
            </NavLink>
            <NavLink to="/about" className="menu-link">
              About
            </NavLink>
            <NavLink to="/contact" className="menu-link">
              Contact
            </NavLink>
          </div>
          <LoginButton />
          {/* <hr />
          <div className="profile-section">
            <small className="p-section-header">Profile</small>
            <div></div>
          </div> */}
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
}

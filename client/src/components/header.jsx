import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./../asserts/styles/header/header.css";
import logo from "./../asserts/images/logo.svg";
import UserAvatar from "./userAvatar";

function Header() {
  let {
    logout,
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const callAPI = async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log(token);
      } catch (error) {
        console.log(error);
      }
    };
    if (!isLoading) {
      callAPI();
    }
  }, [isLoading, getAccessTokenSilently]);

  function toggleMenu() {
    let menu = document.getElementById("menu"); //.classList.toggle(".visible");
    menu.classList.toggle("visible");
  }
  function toggleDropdown() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("dropdown-visible");
  }
  useEffect(() => {
    document.getElementById("menu-btn").addEventListener("click", toggleMenu);
    let mLinks = document.getElementsByClassName("menu-link");
    for (let mLink of mLinks) {
      mLink.addEventListener("click", toggleMenu);
    }
    document
      .querySelector("#user-avi")
      ?.addEventListener("click", toggleDropdown);

    let dLinks = document.getElementsByClassName("dropdown-link");
    for (let dLink of dLinks) {
      dLink.addEventListener("click", toggleDropdown);
    }

    return () => {
      document
        .getElementById("menu-btn")
        .removeEventListener("click", toggleMenu);
      for (let mLink of mLinks) {
        mLink.removeEventListener("click", toggleMenu);
      }
      document
        .querySelector("#user-avi")
        ?.removeEventListener("click", toggleDropdown);
      for (let dLink of dLinks) {
        dLink.removeEventListener("click", toggleDropdown);
      }
    };
  });

  return (
    <header className="container">
      <nav className="navigation">
        <div className="logo-box">
          <Link to="/">
            <img src={logo} alt="idae logo" className="logo" />
          </Link>
        </div>
        <div className="mobile-nav">
          <svg
            viewBox="0 0 64 63"
            fill="none"
            className="cart"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3207 53.2844C13.0052 53.1795 13.0488 50.2913 15.3206 50.191C21.7559 50.2109 38.7297 50.1964 45.3697 50.2005C47.1859 50.2005 48.7396 49.1045 49.1481 47.5354L52.9185 33.0568C53.1344 32.2278 52.9165 31.3697 52.3208 30.7029C51.725 30.036 50.8332 29.6481 49.8738 29.6481C47.2026 29.6481 24.5284 29.5571 12.9147 29.516L11.0738 23.4585C10.6318 22.0109 9.14218 21 7.45108 21H1.55356C0.69558 21 0 21.6168 0 22.3777C0 23.1385 0.69558 23.7554 1.55356 23.7554H7.45108C7.74222 23.7554 7.99855 23.9294 8.07426 24.1771L15.1445 47.4394C13.9014 47.4795 12.7434 47.9279 11.8654 48.7179C10.9428 49.5482 10.4473 50.6472 10.4702 51.8127C10.5159 54.1434 12.6919 56.0397 15.3207 56.0397H17.586C17.2493 56.6664 17.0603 57.3671 17.0603 58.1063C17.0603 60.7652 19.4996 62.9284 22.4979 62.9284C25.4963 62.9284 27.9356 60.7652 27.9356 58.1063C27.9356 57.367 27.7465 56.6664 27.4098 56.0397H37.2196C36.8832 56.6662 36.6941 57.3666 36.6941 58.1056C36.6941 60.7645 39.1335 62.9276 42.1318 62.9276C45.1302 62.9276 47.5696 60.7644 47.5696 58.1056C47.5696 57.3378 47.3651 56.6119 47.0037 55.9669C47.6185 55.7833 48.0618 55.2691 48.0618 54.6621C48.0618 53.9012 47.3662 53.2844 46.5082 53.2844H15.3207ZM24.8284 58.1064C24.8284 59.246 23.7829 60.1731 22.4978 60.1731C21.2127 60.1731 20.1673 59.246 20.1673 58.1064C20.1673 56.9674 21.2117 56.0407 22.4959 56.0398H22.4998C23.784 56.0407 24.8284 56.9674 24.8284 58.1064ZM42.1319 60.1724C40.8469 60.1724 39.8014 59.2452 39.8014 58.1057C39.8014 56.9773 40.8265 56.0579 42.0941 56.0398H42.1698C43.4375 56.0579 44.4627 56.9773 44.4627 58.1057C44.4626 59.2452 43.417 60.1724 42.1319 60.1724ZM49.8852 32.4136C49.8944 32.4239 49.8931 32.4287 49.8911 32.4366L48.3025 38.5375H42.9228L43.8389 32.3817L49.8614 32.4032C49.8706 32.4034 49.8761 32.4034 49.8852 32.4136ZM33.8685 47.445V41.2928H39.3787L38.4631 47.445H33.8685ZM26.1647 47.445L25.2417 41.2928H30.7614V47.445H26.1647ZM19.0129 47.445H19.008C18.6294 47.4449 18.2958 47.2184 18.1973 46.8958L16.4944 41.2928H22.1072L23.0302 47.445H19.0129ZM24.8283 38.5376L23.894 32.3105L30.7613 32.335V38.5376H24.8283ZM33.8685 38.5376V32.3462L40.7065 32.3706L39.7887 38.5376H33.8685ZM20.7577 32.2992L21.6937 38.5375H15.6569L13.7533 32.2741L20.7577 32.2992ZM45.3697 47.445H41.5971L42.5126 41.2928H47.5848L46.1206 46.9154C46.0394 47.2273 45.7307 47.445 45.3697 47.445Z"
              fill="#FCCF31"
            />
            <ellipse
              className="cart-ellipse"
              cx="45"
              cy="20.5"
              rx="19"
              ry="17.5"
              fill="#FCCF31"
            />
            {/* double digits: x=34 y=30 fontS =20px; single: x=38 fontS=24px, */}
            <text x="38" y="30" fill="black" fontSize="24px">
              5
            </text>
          </svg>
          <button id="menu-btn">
            <svg
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
              className="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.36148H27C27.5523 4.36148 28 4.01628 28 3.5904V1.66269C28 1.23681 27.5523 0.891602 27 0.891602H1C0.447688 0.891602 0 1.23681 0 1.66269V3.5904C0 4.01628 0.447688 4.36148 1 4.36148ZM1 12.0723H27C27.5523 12.0723 28 11.7271 28 11.3012V9.37353C28 8.94765 27.5523 8.60245 27 8.60245H1C0.447688 8.60245 0 8.94765 0 9.37353V11.3012C0 11.7271 0.447688 12.0723 1 12.0723ZM1 19.7832H27C27.5523 19.7832 28 19.438 28 19.0121V17.0844C28 16.6585 27.5523 16.3133 27 16.3133H1C0.447688 16.3133 0 16.6585 0 17.0844V19.0121C0 19.438 0.447688 19.7832 1 19.7832Z"
                fill="#FCCF31"
              />
            </svg>
          </button>
        </div>
        <div className="nav-contents">
          <ul className="nav-links">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
          <div className="cart-and-profile">
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 63"
              fill="none"
              className="cart"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3207 53.2844C13.0052 53.1795 13.0488 50.2913 15.3206 50.191C21.7559 50.2109 38.7297 50.1964 45.3697 50.2005C47.1859 50.2005 48.7396 49.1045 49.1481 47.5354L52.9185 33.0568C53.1344 32.2278 52.9165 31.3697 52.3208 30.7029C51.725 30.036 50.8332 29.6481 49.8738 29.6481C47.2026 29.6481 24.5284 29.5571 12.9147 29.516L11.0738 23.4585C10.6318 22.0109 9.14218 21 7.45108 21H1.55356C0.69558 21 0 21.6168 0 22.3777C0 23.1385 0.69558 23.7554 1.55356 23.7554H7.45108C7.74222 23.7554 7.99855 23.9294 8.07426 24.1771L15.1445 47.4394C13.9014 47.4795 12.7434 47.9279 11.8654 48.7179C10.9428 49.5482 10.4473 50.6472 10.4702 51.8127C10.5159 54.1434 12.6919 56.0397 15.3207 56.0397H17.586C17.2493 56.6664 17.0603 57.3671 17.0603 58.1063C17.0603 60.7652 19.4996 62.9284 22.4979 62.9284C25.4963 62.9284 27.9356 60.7652 27.9356 58.1063C27.9356 57.367 27.7465 56.6664 27.4098 56.0397H37.2196C36.8832 56.6662 36.6941 57.3666 36.6941 58.1056C36.6941 60.7645 39.1335 62.9276 42.1318 62.9276C45.1302 62.9276 47.5696 60.7644 47.5696 58.1056C47.5696 57.3378 47.3651 56.6119 47.0037 55.9669C47.6185 55.7833 48.0618 55.2691 48.0618 54.6621C48.0618 53.9012 47.3662 53.2844 46.5082 53.2844H15.3207ZM24.8284 58.1064C24.8284 59.246 23.7829 60.1731 22.4978 60.1731C21.2127 60.1731 20.1673 59.246 20.1673 58.1064C20.1673 56.9674 21.2117 56.0407 22.4959 56.0398H22.4998C23.784 56.0407 24.8284 56.9674 24.8284 58.1064ZM42.1319 60.1724C40.8469 60.1724 39.8014 59.2452 39.8014 58.1057C39.8014 56.9773 40.8265 56.0579 42.0941 56.0398H42.1698C43.4375 56.0579 44.4627 56.9773 44.4627 58.1057C44.4626 59.2452 43.417 60.1724 42.1319 60.1724ZM49.8852 32.4136C49.8944 32.4239 49.8931 32.4287 49.8911 32.4366L48.3025 38.5375H42.9228L43.8389 32.3817L49.8614 32.4032C49.8706 32.4034 49.8761 32.4034 49.8852 32.4136ZM33.8685 47.445V41.2928H39.3787L38.4631 47.445H33.8685ZM26.1647 47.445L25.2417 41.2928H30.7614V47.445H26.1647ZM19.0129 47.445H19.008C18.6294 47.4449 18.2958 47.2184 18.1973 46.8958L16.4944 41.2928H22.1072L23.0302 47.445H19.0129ZM24.8283 38.5376L23.894 32.3105L30.7613 32.335V38.5376H24.8283ZM33.8685 38.5376V32.3462L40.7065 32.3706L39.7887 38.5376H33.8685ZM20.7577 32.2992L21.6937 38.5375H15.6569L13.7533 32.2741L20.7577 32.2992ZM45.3697 47.445H41.5971L42.5126 41.2928H47.5848L46.1206 46.9154C46.0394 47.2273 45.7307 47.445 45.3697 47.445Z"
                fill="white"
              />
              <ellipse
                className="cart-ellipse"
                cx="45"
                cy="20.5"
                rx="19"
                ry="17.5"
                fill="#FCCF31"
              />
              {/* double digits: x=34 y=30 fontS =20px; single: x=38 fontS=24px, */}
              <text x="38" y="30" fill="black" fontSize="24px">
                0
              </text>
            </svg>
            {isAuthenticated && (
              <UserAvatar
                picture={user?.picture}
                name={user?.nickname}
                id="user-avi"
              />
            )}
            {!isAuthenticated && (
              <button
                className="btn-primary-rounded"
                onClick={() => loginWithRedirect()}
              >
                Sign in
              </button>
            )}
          </div>
          <div className="dropdown">
            <NavLink to="/cart" className="dropdown-link">
              View Cart
            </NavLink>
            <NavLink to="/profile" className="dropdown-link">
              Profile
            </NavLink>
            <NavLink
              to="#"
              className="dropdown-link"
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              Sign out
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

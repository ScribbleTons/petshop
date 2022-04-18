import { NavLink } from 'react-router-dom';

export default function NotFoundRoute() {
  return (
    <div className="notfound-container">
      <div className="radial-bg">
        <h1 className="notfound-title">404</h1>
      </div>
      <p className="notfound-text">
        The page you are looking for doesn't exist.
      </p>
      <p className="notfound-text-2 notfound-text">
        Go to <NavLink to="/">Home</NavLink>
      </p>
    </div>
  );
}

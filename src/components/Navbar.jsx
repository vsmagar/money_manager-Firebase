import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../redux/action/authAction";
export default function Navbar() {
  const actionDispatch = useDispatch();
  const { login } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Money-Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">
              Home
            </Link>

            {login ? (
              <>
                <Link to="/account" className="nav-link">
                  Account
                </Link>
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                  >
                    <strong> {login.name}</strong>
                    <img
                      src={login.avatar}
                      alt=""
                      height={40}
                      className="rounded-circle"
                    />
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button
                        type="button"
                        className="btn btn-danger dropdown-item "
                        onClick={(e) => actionDispatch(logoutAction())}
                      >
                        LOGOUT
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/dashboard">
            ShopNip
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link active"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link active" aria-current="page">
                  Add Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/update"
                  className="nav-link active"
                  aria-current="page"
                >
                  Update Products
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  to="/profile"
                  className="nav-link active"
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav mr-0 mb-2 mb-lg-0">
              <li className="nav-item ">
                {auth ? (
                  <Link
                    onClick={logout}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Logout
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardHeader;

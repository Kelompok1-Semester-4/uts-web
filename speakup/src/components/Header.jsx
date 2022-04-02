import React from "react";
import Brand from "./../assets/images/speakup.jpg";
import "./../assets/mystyles.css";
import ChevronDown from "./../assets/icon/light/ChevronDown.svg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Courses from "../assets/pages/Courses";
import Diary from "../assets/pages/Diary";
import Counseling from "../assets/pages/Counseling";
import Home from "../assets/pages/Home";

const Header = () => {
  return (
    <Router>
      <header className="d-flex container my-navbar flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <a
          href=""
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Brand} width={146} height={64} alt="" />
        </a>

        <ul className="nav my-menu col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2 me-5 link-active">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle px-2 me-5 link-dark"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
              <img src={ChevronDown} className="dropdown-icon-in-menu" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/courses">
                  Online Course
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/counseling">
                  Counseling
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/diary" className="nav-link px-2 me-5 link-dark">
              Diary
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end d-none d-xl-block">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </header>

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/counseling" element={<Counseling />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;

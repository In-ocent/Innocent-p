import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Tooltip } from "bootstrap";
import { Link } from "react-router-dom"; // for routing

import profile from "../assets/logo.jpg"; // adjust path

function NaveBer() {
  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => {
      new Tooltip(el, {
        placement: "bottom", // force bottom
        fallbackPlacements: [], // disable flipping
        boundary: "window", // keep inside window
        offset: [0, 10], // add spacing (x=0, y=10px)
      });
    });
  }, []);

  return (
    <nav className="naveber border-bottom fixed-top d-flex align-items-center justify-content-between py-2 px-3 bg-white shadow-sm">
      {/* Left: Profile */}
      <div className="d-flex align-items-center gap-2">
        <Link to="/home">
          <div className="logo-desing">
            <img className="logo-image" src={profile} alt="Profile Logo" />
          </div>
        </Link>

        <div className="logo-name-div d-md-block">
          <h5 className="m-0 p-0 my-name ">Paul Innocent</h5>
          <p className="text-muted m-0 p-0 my-tile">Full Stack Developer</p>
        </div>
      </div>

      {/* Center: Nav Links (hidden on mobile) */}
      <ul className="list-unstyled d-none d-md-flex align-items-center mb-0 gap-2">
        <li className="icons-hover">
          <Link to="/home" className="d-flex align-items-center gap-1 nav-link">
            <i className="bi bi-house"></i> <span>Home</span>
          </Link>
        </li>

         <Link to="/about" className="d-flex align-items-center nav-link">
          <li className="icons-hover">
            <i className="bi bi-person"></i> <span>About</span>
            </li>
          </Link>
        
        <li className="icons-hover">
          <Link to="/project" className="d-flex align-items-center nav-link">
            <i className="bi bi-file-earmark-code"></i> <span>Projects</span>
          </Link>
        </li>
        <li className="icons-hover">
          <Link to="/template" className="d-flex align-items-center nav-link">
            <i className="bi bi-box2"></i> <span>Templates</span>
          </Link>
        </li>
        <li className="icons-hover">
          <Link to="/contact" className="d-flex align-items-center nav-link">
            <i className="bi bi-chat-left"></i> <span>Contact</span>
          </Link>
        </li>
      </ul>

      {/* Right: Coffee + Toggle */}
      <div className="d-flex align-items-center gap-3">
        <Link
          to="/suport"
          className="container-coffee coffee d-flex align-items-center justify-content-center p-2"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Buy Me a Coffee ☕"
        >
          <i className="bi bi-cup-hot fs-5"></i>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler d-md-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="bi bi-list fs-3"></i>
        </button>
      </div>

      {/* Offcanvas Menu (Mobile) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        data-bs-backdrop="true"
        data-bs-scroll="false" // disable scrolling behind
      >
        <div className="offcanvas-header shadow-sm">
          <div className="d-flex align-items-center gap-2">
            <div className="logo-desing">
              <img className="logo-image" src={profile} alt="Profile Logo" />
            </div>
            <div>
              <h5 className="m-0 p-0 my-name">Paul Innocent</h5>
              <p className="text-muted m-0 p-0 my-tile">Full Stack Developer</p>
            </div>
          </div>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3 mb-4">
            <li>
              <Link
                to="/home"
                className="nav-link icons-hover"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-house"></i> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link icons-hover"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-person"></i> About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="nav-link icons-hover"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-file-earmark-code"></i> Projects
              </Link>
            </li>
            <li>
              <Link
                to="/template"
                className="nav-link icons-hover"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-box2"></i> Templates
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link icons-hover"
                data-bs-dismiss="offcanvas"
              >
                <i className="bi bi-chat-left"></i> Contact
              </Link>
            </li>
          </ul>

          <hr />

          <div className="d-flex align-items-center gap-3 mb-3">
            <a href="#" className="text-dark icons-hover">
              <i className="bi bi-github fs-4"></i>
            </a>
            <a href="#" className="text-dark icons-hover">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
            <a href="#" className="text-dark icons-hover">
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a href="#" className="text-dark icons-hover">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="#" className="text-dark icons-hover">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a className="text-dark icons-hover">
              <i className="bi bi-youtube"></i>
            </a>
            <a className="text-dark icons-hover ml-2">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>

          <hr />
          <div
            className="mode-toggle d-flex align-items-center justify-content-center p-2 border rounded-3 hover-shadow"
            role="button"
          >
            Light Mode / Dark Mode
          </div>

          <div className="offcanvas-footer border-top py-2">
            <a
              href="#"
              className="container-coffee d-flex align-items-center justify-content-center p-2 coffee"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Buy Me a Coffee ☕"
            >
              <i className="bi bi-cup-hot fs-5"></i>
            </a>
          </div>
        </div>
        <p className="text-center text-muted mt-2">
          © 2025 Paul Innocent. All rights reserved.
        </p>
      </div>
    </nav>
  );
}

export default NaveBer;

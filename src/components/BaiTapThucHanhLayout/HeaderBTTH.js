import React, { Component } from "react";

export default class HeaderBTTH extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
          <a className="navbar-brand" href="https://cyberlearn.vn">
            Start Bootstrap
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://cyberlearn.vn">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://cyberlearn.vn">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://cyberlearn.vn">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

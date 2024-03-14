import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="container mt-5 ">
      <h1 className="mt-5 text-center">Add & Update</h1>
      <nav className="navbar navbar-expand-sm navbar-light bg-success">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item ms5 text-center mb-2 mb-lg-0">
              <NavLink className="nav-link text-white fs-4" to="/addstud">
                Add Student
              </NavLink>
            </li>
            <li className="nav-item ms-5 navbar-nav mb-2 mb-lg-0">
              <NavLink className=" nav-link text-white fs-4" to="/allstud">
                All Students
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <h4 className="mt-5 text-center">Here you can Add or update student data by selecting the corresponding option from above</h4>
    </div>
  );
}

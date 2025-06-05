import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import people from "../img/people.png";
import new_emp from "../img/new_emp.jpg";

import "../css/04-orgDash.css";
import React from "react";
import Dashboard from "./04-dashboard";
import People from "./05-people";
import Addemp from "./06-newEmp";
import { useState } from "react";

import { Link } from "react-router-dom";

const Org = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="App">
      {/* <Aside /> */}
      <aside className="sideBar">
        <div className="logodiv">
          <img className="logo" src={logo} alt="Web App Logo Is Missing"></img>
        </div>

        <div className="menu">
          <ul>
            <li></li> <li></li> <li></li>
          </ul>
        </div>

        <div className="tab">
          <Link
            className={`dashboard  ${
              activeTab === "dashboard" ? "active" : ""
            }`}
            to={activeTab === "dashboard" ? "/dashboard.jsx" : "#"}
            onClick={() => setActiveTab("dashboard")}
          >
            <img
              className="dblogo"
              src={logo2}
              alt="Dashboard Icon is Missing"
            ></img>
            <h3 className="nav-button">Dashboard</h3>
          </Link>

          <Link
            className={`dashboard ${activeTab === "people" ? "active" : ""}`}
            to={activeTab === "people" ? "/people" : "#"}
            onClick={() => setActiveTab("people")}
          >
            <img
              className="dblogo"
              src={people}
              alt="Dashboard Icon is Missing"
            ></img>

            <h3 className="nav-button">People</h3>
          </Link>

          <div
            className={`dashboard ${activeTab === "addEmp" ? "active" : ""}`}
            onClick={() => setActiveTab("addEmp")}
          >
            <img
              sizes="5%"
              className="dblogo"
              src={new_emp}
              alt="Dashboard Icon is Missing"
            ></img>

            <h3 className="nav-button">Add Emp</h3>
          </div>
        </div>
        <hr />
        <div className="appname">
          <h3>Time Sheet</h3>
        </div>
      </aside>

      {/* Daashboard page  */}

      {activeTab === "dashboard" && (
        <Dashboard className="main visible" id="dashboard" />
      )}

      {/* People Page  */}

      {activeTab === "people" && (
        <People className="main visible" id="people" />
      )}

      {/* Add New Employee Page */}

      {activeTab === "addEmp" && <Addemp className="main visible" />}
    </div>
  );
};
export default Org;

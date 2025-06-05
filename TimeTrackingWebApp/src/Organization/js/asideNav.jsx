import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import people from "../img/people.png";
import new_emp from "../img/new_emp.jpg";
import React, { useState } from "react";
import "../css/04-orgDash.css";

function Aside() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
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
        <div
          className={`dashboard ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          <img
            className="dblogo"
            src={logo2}
            alt="Dashboard Icon is Missing"
          ></img>
          <h3 className="nav-button">Dashboard</h3>
        </div>
        <div
          to="#peopletab"
          className={`dashboard ${activeTab === "people" ? "active" : ""}`}
          onClick={() => setActiveTab("people")}
        >
          <img
            className="dblogo"
            src={people}
            alt="Dashboard Icon is Missing"
          ></img>

          <h3 className="nav-button">People</h3>
        </div>
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
  );
}

export default Aside;

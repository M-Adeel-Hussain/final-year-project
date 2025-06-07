import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/EmpProfile.css";
import Profile from "../img/profile.png";
import Stopwatch from "../modules/Stopwatch";

function EmpProfile() {
  const [capturedImage] = useState();
  const empPic = capturedImage; // add Bakend code in employee pic
  const [employee, setEmployee] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent the default form submission
  // };

  return (
    <div className="emp-profile">
      <div className="emp-profile-head">
        <h2 className="Profile-title">Employee Profile</h2>
        <Link to="/Face-Detect" className="faccrossign">
          {" "}
          &times;
        </Link>
      </div>

      <div className="emp-main">
        <div className="emp-pic">
          <div className="picture">
            <img src={Profile} alt="Employee Pic" />
          </div>
        </div>
        <div className="emp-data">
          <form className="emp-form">
            <label className="emp-form-label" htmlFor="employeeName">
              M.Adeel Hussain
              {/*{employee.name}*/} {/* add variable employee Name */}
            </label>
            <label className="emp-form-label" htmlFor="accNo">
              Acc No: {"03056629"}
              {/* add variable employee Account No */}
            </label>

            <label className="emp-form-label" htmlFor="workHrs">
              Hour Rate: {30}
              {/*{employee.workingHours}/*} {/* Working Houre */}
            </label>

            <label className="emp-form-label" htmlFor="hrsRate">
              Working Hour: {1}/hrs
              {/*Houre Rate*/}
            </label>
            <label className="emp-form-label" htmlFor="earnedAmount">
              Total Sal: {30}$
              {/* ${employee.earnedAmount}/*} {/* Tatal count Salary */}
            </label>
          </form>
        </div>
        <div className="emp-time">
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}

export default EmpProfile;

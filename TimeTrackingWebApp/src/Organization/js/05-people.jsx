import profile from "../img/profile.png";
import EmployeeTable from "../modules/empTableform";
import Adeel from "../img/Adeel.jpg";
import logo from "../img/logo.png";
import React, { useState } from "react";
import ProfilePopup from "../modules/profilePopup";

function People() {
  const [employees] = useState([
    {
      pic: Adeel,
      name: "M. Adeel Hussain",
      attendance: "Present",
      workingHours: 8,
      earnedAmount: 200,
    },
    {
      pic: profile,
      name: "M. Umair Murtaza",
      attendance: "Present",
      workingHours: 7,
      earnedAmount: 175,
    },
    {
      pic: logo,
      name: "Mark Johnson",
      attendance: "Absent",
      workingHours: 0,
      earnedAmount: 0,
    },
  ]);

  return (
    <div id="peopletab" className={`main`}>
      <header className="head">
        <h2 className="h2">People</h2>
        <ProfilePopup />
      </header>
      <div className="thead">
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
}

export default People;

import React from "react";
import WBarGraph from "../modules/wBarGraph";
import MBarGraph from "../modules/mBarGraph";
import { useState, useEffect } from "react";
import ProfilePopup from "../modules/profilePopup";

function Dashboard() {
  const getInitialTab = () => {
    const savedTab = localStorage.getItem("activeday");
    return savedTab ? savedTab : "week"; // ✅ Ensures default is 'dashboard'
  };
  const [activeday, setactiveday] = useState(getInitialTab);

  // Update localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem("activeday", activeday);
  }, [activeday]);
  return (
    <div className="main">
      <header className="head">
        <h2 className="h2">Dashboard</h2>
        <ProfilePopup />
      </header>
      <div className="duration">
        <button className="weektab">
          <h2
            className={`weektab ${activeday === "week" ? "wshow" : ""}`}
            onClick={() => setactiveday("week")}
          >
            Week
          </h2>
        </button>
        <button className="weektab">
          <h2
            className={`weektab ${activeday === "month" ? "wshow" : ""}`}
            onClick={() => setactiveday("month")}
          >
            Month
          </h2>
        </button>
      </div>
      <main>
        <div className="tabs">
          <div className="totalOrg">
            <h3 className="h31">Total Employees</h3>
            <p className="par1">07</p> {/* Week & Month Total Employee  */}
          </div>
          <div className="active">
            <h3 className="h32">Active</h3>
            <p
              className={`par2 ${activeday === "week" ? "visible" : "Hide"}`}
              onClick={() => setactiveday("week")}
            >
              01
            </p>{" "}
            {/* Week Active Member  */}
            <p
              className={`par2 ${activeday === "month" ? "visible" : "Hide"}`}
              onClick={() => setactiveday("month")}
            >
              05
            </p>{" "}
            {/* Month Active Member  */}
          </div>
          <div className="nonActive">
            <h3 className="h33">None Active</h3>
            <p
              className={`par3 ${activeday === "week" ? "visible" : "Hide"}`}
              onClick={() => setactiveday("week")}
            >
              00
            </p>{" "}
            {/* Week Non Active Member  */}
            <p
              className={`par3 ${activeday === "month" ? "visible" : "Hide"}`}
              onClick={() => setactiveday("month")}
            >
              02
            </p>{" "}
            {/* Month Non Active Member  */}
          </div>
        </div>
        <div>
          <div
            className={`bargraph ${activeday === "week" ? "visible" : "Hide"}`}
            onClick={() => setactiveday("week")}
          >
            <WBarGraph />
          </div>
          <div
            className={`bargraph ${activeday === "month" ? "visible" : "Hide"}`}
            onClick={() => setactiveday("month")}
          >
            <MBarGraph />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

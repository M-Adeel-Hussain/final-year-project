import React, { useState } from "react";
import "../css/Start.css";
import Background from "../img/Background.jpg";
import { Link } from "react-router-dom";

function Start() {
  const [showBtn, setshowBtn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const openWebcam = () => {
    setWebcamOn(true);
    setCapturedImage(null);
  };

  let a= webcamOn;
  let b= capturedImage;
console.log(a+b);
  return (
    <div className={`start-Page`}>
      <div className={`start-Back`}>
        <img className="start-Back-Pic" src={Background} alt="" />
        <button
          className="start-btn"
          onClick={() => {
            setshowBtn(true);
          }}
        >
          Start
        </button>
      </div>

      <div
        className={`show-org-emp-page ${
          showBtn ? "org-emp-page" : "show-org-emp-page"
        }`}
      >
        <div className={`show-org-emp-btn`}>
          <div
            className={`show-org-emp-cross ${
              showBtn ? "org-emp-page" : "show-org-emp-page"
            }`}
            onClick={() => {
              setshowBtn(false);
            }}
          >
            Your Resposiability
            <div className="cross-icon-start"> &times; </div>
          </div>

          <div className="org-start-link">
            <div className="org-start-btn">
              <Link to="/orgLogin">Organization</Link>
            </div>

            <div className="emp-start-btn" onClick={openWebcam}>
              <Link to="/Face-Detect">Employee</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;

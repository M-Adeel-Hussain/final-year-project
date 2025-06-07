import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import "../css/FaceDetect.css";
import "../css/Start.css";
import Background from "../img/Background.jpg";
import { Link } from "react-router-dom";
import pic1 from "../img/TimeStart.jpg";
import pic2 from "../img/FaceStart.jpg";

function FaceDetect() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [webcamOn, setWebcamOn] = useState(false);
  const [savedImage, setSavedImage] = useState(null);

  useEffect(() => {
    if (webcamOn) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (webcamRef.current) {
            webcamRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing webcam: ", err);
        });
    }
  }, [webcamOn]);

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  const saveImage = () => {
    setSavedImage(capturedImage); // Save the image
    setCapturedImage(null); // Hide captured image and Save button
  };


  
  
  return (
    <div className={`Face-detect-page`}>
      {/* {webcamOn && ( */}
      <div className="emp-webcam-box">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpg"
          className="webcam-feed"
          videoConstraints={{ facingMode: "user" }}
        />
      </div>

      <div className={`start-Back`}>
        <img className="start-Back-Pic" src={Background} alt="" />

        <Link to="/final-year-project/" className="faccrossign">
          {" "}
          &times;
        </Link>
        <button className="start-btn emp-login-btn" onClick={captureImage}>
          Match
          {console.log(capturedImage)}
        </button>
      </div>
      <div className="em-login-btn">
        <Link to="/EmpLogin" className="pin-login-btn">
          Pin Login
        </Link>
      </div>
    </div>
  );
}
export default FaceDetect;

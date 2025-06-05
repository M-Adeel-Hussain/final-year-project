import profile from "../img/profile.png";
import React, { useState, useRef, useEffect } from "react";
import ProfilePopup from "../modules/profilePopup";
import "../css/webcam.css";
import "../css/02-orgReger.css";
import Webcam from "react-webcam";

function Addemp() {
  // New Employee Register
  const [profileImage, setProfileImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const [webcamOn, setWebcamOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const [savedImage, setSavedImage] = useState(null); // Store saved image


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

  const openWebcam = () => {
    setWebcamOn(true);
    setCapturedImage(null);
  };

  const closeWebcam = () => {
    setWebcamOn(false);
  };

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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show the confirmation box
    setTimeout(() => setSubmitted(false), 3000); // Hide the confirmation box after 3 seconds
  };

  return (
    <div className={`main`}>
      <header className="head">
        <h2 className="h2">New Employees</h2>
        <ProfilePopup />
      </header>

      <div className="regOrg">
        <main className="siguppage">
          <div className="profile-uploader">
            <div className="image-preview">
              <img
                src={profileImage || profile}
                alt="Profile"
                className="profile-img"
              />
            </div>
            <label htmlFor="file-input" className="custom-file-label">
              Upload Pic
            </label>
            <input
              type="file"
              id="file-input"
              className="file-input"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="datasignup">
            <div id="dashboard-form-newemp" className="formdata">
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="form-box">
                  <div className="form-box-data">
                    <label className="reglble" htmlFor="empName">
                      Employee Name
                    </label>
                    <input
                      className="reginpt"
                      type="text"
                      id="empName"
                      required
                    />
                  </div>
                  <div className="form-box-data">
                    <label className="reglble" htmlFor="regNo">
                      Registration No
                    </label>
                    <input
                      className="reginpt"
                      type="text"
                      id="regNo"
                      required
                    />
                  </div>
                  <div className="form-box-data">
                    <label className="reglble" htmlFor="fatherName">
                      Father Name
                    </label>
                    <input
                      className="reginpt"
                      type="text"
                      id="fatherName"
                      required
                    />
                  </div>
                  <div className="form-box-data">
                    <label className="reglble" htmlFor="mobileNo">
                      Mobile No
                    </label>
                    <input
                      className="reginpt"
                      type="text"
                      id="mobileNo"
                      required
                    />
                  </div>
                  <div className="form-box-data">
                    {/* <label className="reglble" htmlFor='idCard'>I'D Card</label> */}
                    <label className="reglble" htmlFor="hourlyRate">
                      Hourly Rate
                    </label>
                    <input
                      className="reginpt"
                      type="number"
                      id="hourlyRate"
                      required
                    />
                  </div>
                  <div className="form-box-data">
                    <label className="reglble" htmlFor="accNo">
                      Account No{" "}
                    </label>
                    {/* <input className="reginpt" type='text' id='idCard' required/> */}
                    <input
                      className="reginpt"
                      type="text"
                      id="accNo"
                      required
                    />
                  </div>
                  <div className="form-box-data">
                    <label className="reglble" htmlFor="password">
                      Set Password
                    </label>
                    <input
                      className="reginpt"
                      type="password"
                      id="password"
                      required
                    />
                  </div>
                  <div className="form-box-data">
                    <label className="reglble" htmlFor="address">
                      Address
                    </label>
                    <input
                      className="reginpt"
                      type="text"
                      id="address"
                      required
                    />
                  </div>

                  <div className="webcam-container">
                    {!webcamOn && (
                      <button className="open-btn" onClick={openWebcam}>
                        Open Webcam
                      </button>
                    )}

                    {webcamOn && (
                      <div className="webcam-box">
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpg"
                          className="webcam-feed"
                          videoConstraints={{ facingMode: "user" }}
                        />
                        <div className="button-group">
                          <button
                            className="capture-btn"
                            onClick={captureImage}
                          >
                            Capture
                          </button>
                          <button className="close-btn" onClick={closeWebcam}>
                            Close Webcam
                          </button>
                        </div>
                      </div>
                    )}

                    {capturedImage && (
                      <div className="captured-image">
                        <h3>Captured Image:</h3>
                        <img src={capturedImage} alt="Captured" />
                        <button className="save-btn" onClick={saveImage}>
                          Save
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <button className="Dashboard-new-emp" type="submit">
                  Confirm
                </button>

                {submitted && (
                  <div className="success-box">
                    <div className="tick-mark">
                      <div className="circle"></div>
                      <div className="check"></div>
                    </div>
                    <p>Successful Add Employee</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Addemp;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import "../css/livetrack-prof.css";
import video from "./video/video.mp4";

const LiveTrack = () => {
  const [user, setUser] = useState({ id: 1, name: "John Doe", hourly_rate: 10 });
  const [trackingStatus, setTrackingStatus] = useState("paused");
  const [duration, setDuration] = useState(0);
  const [salary, setSalary] = useState(0);
  const [sessionStart, setSessionStart] = useState(true);

  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const intervalRef = useRef(null);
  const prevTrackingStatusRef = useRef("paused");
  const organization = localStorage.getItem("organization_name") || "MyOrg";

  useEffect(() => {
    // Simulate user being active and updating tracking info
    intervalRef.current = setInterval(() => {
      const isActive = Math.random() > 0.3; // Randomly active or paused
      setTrackingStatus(isActive ? "active" : "paused");
      if (isActive) {
        setDuration((prev) => prev + 1);
        setSalary((prev) => prev + user.hourly_rate / 360); // Simulate salary per 10 seconds
      }
      prevTrackingStatusRef.current = isActive ? "active" : "paused";
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Face-Detect");
  };

  const handleDelete = () => {
    if (!user) return;
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    alert("Your account has been deleted.");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="track-main" style={{ textAlign: "center" }}>
      <div className="track-header">
        <h1>Employee Tracking</h1>
      </div>
      <div className="track-content">
        <div className="track-aside">
          <div className="track-ani">
            <video className="videos" src={video} autoPlay muted loop width={100}></video>
          </div>
          <h2 className="track-org">Organization: {organization}</h2> <hr />
          <h2 className="track-empname track-empn">Employee: {user.name}!</h2> <hr />
          <h3 className="track-status">
            Status:{" "}
            <span style={{ color: trackingStatus === "active" ? "orange" : "gray" }}>
              {trackingStatus.toUpperCase()}
            </span>
          </h3> <hr />
          <div className="track-btnlo">
            <button className="track-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="track-web">
          <Webcam
            className="track-cam"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={320}
            height={240}
            frameBorder={400}
            videoConstraints={{ facingMode: "user" }}
            mirrored={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveTrack;

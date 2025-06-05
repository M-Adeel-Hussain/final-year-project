import React, { useState } from "react";
import profile from "../img/profile.png";
import ACGlogo from "../img/ACG-logo.png";
import "../css/02-orgReger.css";
import { useNavigate, Link } from "react-router-dom";

function OrgReg() {
  const [profileImage, setProfileImage] = useState(null);

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Example organization data (Replace with API call if needed)
  const organization = {
    name: "Tech Corp",
    logo: ACGlogo,
    isRegistered: true, // Change to false to test the unregistered scenario
  };

  // Handle file input change
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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show the confirmation box
    setTimeout(() => setSubmitted(false), 3000); // Hide the confirmation box after 3 seconds
  };

  return (
    <div className="regOrg">
      <header className="reghead">
        <div className="baero">
          <Link to="/orgLogin" className="org-be">
            &larr;
          </Link>
        </div>
        <h2 className="regtitle">Registration</h2>
        <div
          className="profilelogo"
          // onMouseEnter={() => setIsPopupVisible(true)}
        >
          {/* Profile Picture */}
          <div className="ppic">
            <img
              className="plogo"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              src={profile}
              alt="Profile Pic"
            />

            {/* Hover Popup */}
            {isHovered && (
              <div className="profile-popup">
                {organization.isRegistered ? (
                  <>
                    <img
                      className="org-logo"
                      src={organization.logo}
                      alt="Org Logo"
                    />
                    <h3 className="org-name">{organization.name}</h3>
                    <button
                      className="login-button"
                      onClick={() => navigate("/")}
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <p className="register-text">
                    Firstly register your organization.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
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
            Add Logo
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
          <div className="formdata">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="form-box">
                <div className="form-box-data">
                  <label className="reglble" htmlFor="orgName">
                    Organization Name
                  </label>
                  <input
                    className="reginpt"
                    type="text"
                    id="orgName"
                    required
                  />
                </div>
                <div className="form-box-data">
                  <label className="reglble" htmlFor="regNo">
                    Registration No
                  </label>
                  <input className="reginpt" type="text" id="regNo" required />
                </div>
                <div className="form-box-data">
                  <label className="reglble" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="reginpt"
                    type="text"
                    id="location"
                    required
                  />
                </div>
                <div className="form-box-data">
                  <label className="reglble" htmlFor="PrName">
                    Product Name{" "}
                  </label>
                  <input className="reginpt" type="text" id="PrName" required />
                </div>
                <div className="form-box-data">
                  <label className="reglble" htmlFor="onrName">
                    Owner Name
                  </label>
                  <input
                    className="reginpt"
                    type="text"
                    id="onrName"
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
                  <label className="reglble" htmlFor="idCard">
                    Id Card No
                  </label>
                  <input
                    className="reginpt"
                    type="number"
                    id="idCard"
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
              </div>
              <button id="reglgobtn" type="submit">
                Confirm
              </button>

              {submitted && (
                <div className="success-box">
                  <div className="tick-mark">
                    <div className="circle"></div>
                    <div className="check"></div>
                  </div>
                  <p>Registration Successful!</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="crs-sing"></div>
      </main>
    </div>
  );
}

export default OrgReg;

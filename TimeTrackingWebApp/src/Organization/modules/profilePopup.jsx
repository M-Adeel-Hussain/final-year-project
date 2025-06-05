import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

import { Link } from 'react-router-dom';
import profile from "../img/profile.png";
import ACGlogo from "../img/ACG-logo.png"; // Organization logo
import '../css/empTableform.css';
import '../css/01-login.css';
import '../css/profilePopup.css';


const ProfilePopup = ({user, onLogout, employees }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  
  const [showForm, setShowForm] = useState(false);
  const organization = {
    name: "Tech Corp",
    logo: ACGlogo,
    isRegistered: true, // Change to false to test unregistered condition
  };
  
    const showForgotPasswordModal = () => {
      setShowForm(true);
      // setEmployee();
    };
  
  const hideForgotPasswordModal = () => {
    setShowForm(false);
    // setEmployee(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert('Form submitted successfully!');
    hideForgotPasswordModal();
  };
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


  

  return (
    <div className="profilelogo">
      {/* Profile Picture */}
      <Link
        className="ppic"
        to="#"
        onMouseEnter={() => setIsPopupVisible(true)}
      >
        <img className="plogo" src={profile} alt="Profile Pic" />
      </Link>

      {/* Hover Popup */}
      {isPopupVisible && (
        <div
          className="profile-popup"
          onMouseEnter={() => setIsPopupVisible(true)}
          onMouseLeave={() => setIsPopupVisible(false)}
        >
          {organization.isRegistered ? (
            <>
              <img className="org-logo" src={organization.logo} alt="Org Logo" />
              <h3 className="org-name">{organization.name}</h3>
              
               
              {/* <button className="home-button" onClick={() => navigate("/")}>
              Edit
              </button> */}
              <Link className="edit-button" to="#" onClick={showForgotPasswordModal}
                // onClick={() => showForgotPasswordModal(employee)}
                >
                  Edit
                </Link>
    
   {/* ✅ Show Form when link is clicked */}
   {showForm && (

<div className="modal" id="forgot-password-modal">
<div className="modal-overlay" onClick={hideForgotPasswordModal}></div>
<div className="modal-content">
  <div className="modal-header">
      <h2 className="emptableh2">Organization Edit</h2>
    <button className="close-button" onClick={hideForgotPasswordModal}>
      &times;
    </button>
            {/* </header> */}
  </div>
     

  {/* Employee Edit Page  */}
              <div className={`empPayEdit`}
              // onClick={()=>setactiveTab('edit')}
              >
              <div className="empPayPic">
                
                  <img
                    src={profileImage || profile}
                    alt="Profile"
                    className="empPay-profile-img"
                  />
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
                       
              <form className="formedit" onSubmit={handleSubmit}>
                <label className="formedit-label" htmlFor="product-name">
                  Product Name
                </label>
                <label className="formedit-label" htmlFor="owner-name">
                  Owner Name
                </label>
                <input
                  className="formedit-input"
                  id="product-name"
                  type="number"
                  required
                />
                <input
                  className="formedit-input"
                  id="owner-name"
                  type="number"
                  required
                />
               
                <label className="formedit-label" htmlFor="registration-no">
                  Registration No
                </label>
                <label className="formedit-label" htmlFor="new-password">
                  New Password
                </label>
                <input
                  className="formedit-input"
                  id="registration-no"
                  type="number"
                  required
                />
                <input
                  className="formedit-input"
                  id="new-password"
                  type="password"
                  required
                />
                <button className="formedit-button" type="submit">
                  Confirm
                </button>
              </form>
              </div>

          </div>
        </div>
      )}






               
              <button className="home-button" 
              onClick={() => navigate("/orgLogin")}>
              Logout
              </button>

             
            </>

          ) : (
            <p className="register-text">Firstly register your organization.</p>
          )}
        </div>
      )}










      </div>
  
  );
};

export default ProfilePopup;

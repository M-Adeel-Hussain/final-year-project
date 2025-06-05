import "../css/empTableform.css";
import "../css/01-login.css";
import profile from "../img/profile.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeTable = ({ employees }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setactiveTab] = useState("payment");
  const [employee, setEmployee] = useState(null);

  const showForgotPasswordModal = (employee) => {
    setIsModalVisible(true);
    setEmployee(employee);
  };

  const hideForgotPasswordModal = () => {
    setIsModalVisible(false);
    setEmployee(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert("Form submitted successfully!");
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
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Attendance</th>
            <th>Working Hours</th>
            <th>Earned Amount</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td className="employee-info">
                <img
                  src={employee.pic}
                  alt={`${employee.name}'s pic`}
                  className="employee-pic"
                />
                <span>{employee.name}</span>
              </td>
              <td>{employee.attendance}</td>
              <td>{employee.workingHours} hrs</td>
              <td>${employee.earnedAmount}</td>
              <td>
                <Link
                  className="edit-button"
                  to="#forgot-password-modal"
                  onClick={() => showForgotPasswordModal(employee)}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalVisible && employee && (
        <div className="modal" id="forgot-password-modal">
          <div
            className="modal-overlay"
            onClick={hideForgotPasswordModal}
          ></div>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="emptableh2">Employee</h2>
              <button
                className="close-button"
                onClick={hideForgotPasswordModal}
              >
                &times;
              </button>
              {/* </header> */}
            </div>
            <div className="modal-body">
              <div className="navemptable">
                <button
                  className={`form-heading ${
                    activeTab === "payment" ? "payeditactive" : ""
                  }`}
                  onClick={() => setactiveTab("payment")}
                >
                  Payment
                </button>
                <button
                  className={`form-heading ${
                    activeTab === "edit" ? "payeditactive" : ""
                  }`}
                  onClick={() => setactiveTab("edit")}
                >
                  Edit
                </button>
              </div>
              {/* Employee payment Page */}
              <div
                className={`empPayEdit  ${
                  activeTab === "payment" ? "visible" : "Hide"
                }`}
                onClick={() => setactiveTab("payment")}
              >
                <div className={`empPayPic`}>
                  <img
                    src={profileImage || profile}
                    alt="Profile"
                    className="empPay-profile-img"
                  />
                </div>

                <form className="form" onSubmit={handleSubmit}>
                  <label className="form-label" htmlFor="employeeName">
                    {employee.name}
                  </label>
                  <label className="form-label" htmlFor="registration-no">
                    F21NSEEN1M01031
                  </label>

                  <label className="form-label" htmlFor="workHrs">
                    Working Hour {employee.workingHours}
                  </label>

                  <label className="form-label" htmlFor="hrsRate">
                    100/hrs
                  </label>
                  <label className="form-label" htmlFor="earnedAmount">
                    ${employee.earnedAmount}
                  </label>
                  <button className="form-button" type="submit">
                    Confirm
                  </button>
                </form>
              </div>

              {/* Employee Edit Page  */}
              <div
                className={`empPayEdit ${
                  activeTab === "edit" ? "visible" : "Hide"
                }`}
                onClick={() => setactiveTab("edit")}
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
                  <label className="formedit-label" htmlFor="hourly-rate">
                    Hourly Rate
                  </label>
                  <label className="formedit-label" htmlFor="account-no">
                    Account No
                  </label>
                  <input
                    className="formedit-input"
                    id="hourly-rate"
                    type="number"
                    required
                  />
                  <input
                    className="formedit-input"
                    id="account-no"
                    type="number"
                    required
                  />

                  <label className="formedit-label" htmlFor="allowed-work">
                    Allowed Work(hrs/day)
                  </label>
                  <label className="formedit-label" htmlFor="new-password">
                    New Password
                  </label>
                  <input
                    className="formedit-input"
                    id="allowed-work"
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
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;

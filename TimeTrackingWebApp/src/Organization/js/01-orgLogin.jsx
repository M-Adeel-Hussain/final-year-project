import "../css/01-login.css";
import "../css/01-login.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function OrgLogin() {
  const [names, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [display, setDisplay] = useState("none");

  const handleLogin = () => {
    // console.log('Login button clicked');
    if (names === "Adeel" && password === "31") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/orgDashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const forgtPasShow = () => {
    setDisplay("block");
  };
  const forgtPashide = () => {
    setDisplay("none");
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Add your custom submission logic here
    alert("Form submitted successfully!");
    forgtPashide();
  };

  return (
    <div className="org-login">
      <Link to="/" className="crossign">
        &times;
      </Link>
      <div className="page">
        <form method="POST">
          <h3 className="orgTitle">Organization</h3>
          <label className="loginlabel" htmlFor="name">
            Name
          </label>
          <input
            className="lgninput"
            type="text"
            id="names"
            value={names}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="loginlabel" htmlFor="password">
            Password
          </label>
          <input
            className="lgninput"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgtpswd">
            <Link id="fppath" to="#frgtpswd" onClick={forgtPasShow}>
              Forget Password
            </Link>
          </div>
          <button className="lgnbtn" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="register">
          <Link id="reg" to="/orgReg">
            Registration
          </Link>
          <i> New Organization</i>
        </div>

        {error && <p className="error">{error}</p>}
      </div>

      {/* Forget Password  */}
      {display && (
        <div style={{ display: display }} id="frgtpswd">
          <div className="crossign" onClick={forgtPashide}>
            {" "}
            &times;{" "}
          </div>
          <div className="fpbpage">
            <form
              className="fpfom"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h2 className="fphdng">Reset Password</h2>
              <label className="fplabl">Registration No</label>
              <input className="fpinpt" type="text" required></input>
              <label className="fplabl">Id Card No</label>
              <input className="fpinpt" type="number" required></input>
              <label className="fplabl">New Password</label>
              <input className="fpinpt" type="password" required></input>
              <button className="fpbtn" type="submit">
                Confirm
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrgLogin;

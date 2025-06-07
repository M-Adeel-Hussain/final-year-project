import "../../Organization/css/01-login.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import pic1 from "../img/TimeStart.jpg";
import pic2 from "../img/FaceStart.jpg";

function EmpLogin() {
  const [names, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [display, setdisplay] = useState("none");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (names === "Adeel" && password === "31") {
      localStorage.setItem("isAuthenticated", "true");
      setdisplay("block");
    } else {
      setError("Invalid username or password");
    }
  };

  function forgtPashide() {
    setdisplay("none");
  }

  return (
    <div className="emp-login">
      <Link to="/Face-Detect" className="faccrossign">
        {" "}
        &times;
      </Link>
      <div className="emp-page">
        <form method="POST">
          <h3 className="orgTitle">Employee</h3>
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
          <button className="lgnbtn" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>

      {display && (
        <div style={{ display: display }} id="frgtpswd" >
          <div className="crossign" onClick={forgtPashide}>
            {" "}
            &times;{" "}
          </div>
          <div className="slctmdl">
            <div
              className="modl1" >
              <Link to="/EmpProfile">
                <img className="mdlpic1" src={pic1} alt="timestart pic is missing"/>
              </Link>
            </div>
            <div
              className="modl2">
              <Link to="/liveTrack-pro">
                <img className="mdlpic2" src={pic2} alt=""/>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmpLogin;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
const Login = () => {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("username or password can't blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert>Login not successful try again...</Alert>,
        document.getElementById("root")
      );
    }
  };
  const handleReset = () => {
    setUname("");
    setPwd("");
  };
  return (
    <>
      <div className="row mb-2">
        <label htmlFor="inputUserName" className="col-sm-2 col-form-label">
          UserName
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="inputUserName"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="inputpwd" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="inputpwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
      </div>
      <button type="button" onClick={doLogin} className="btn btn-primary">
        Login
      </button>
      <br></br>
      <br></br>
      <button type="button" onClick={handleReset} className="btn btn-primary">
        Reset
      </button>
    </>
  );
};

export default Login;

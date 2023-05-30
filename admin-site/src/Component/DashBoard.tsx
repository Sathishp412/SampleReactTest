import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
const DashBoard = () => {
  const navigate = useNavigate();
  const goEmployee = () => {
    navigate("/emp/");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <Header />
        <div>
          <p>
            Welcome <b>{localStorage.getItem("uname")} </b>to the portal
          </p>
          <button onClick={doLogout}>Logout</button>
        </div>
        <NavigationMenu />
        <Footer />
      </div>
    );
  }
};

export default DashBoard;

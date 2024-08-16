import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <>
      <nav className="navbar  fixed-top header ">
        <div className="img">
          <img src="./img/logo4.png" />
        </div>
        <div
        className="headername"
          style={{
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Pardeep Juice Corner
        </div>
        <NavLink to="/menu" >
          <div className="chat">
         Menu
        </div>
        </NavLink>
      </nav>
    </>
  );
}

export default Header;

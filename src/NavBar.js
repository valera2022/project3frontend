import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const style ={
 display: "inline-block",
  width: "60px",
  padding: "10px",
  margin: "0 10px 10px",
  background: "black",
  textDecoration: "none",
  color: "white",
    }
    return (
      <div>
        <NavLink
          to="/doctors"
          exact
          style={style}
          activeStyle={{
            background: "red",
          }}
        >
          Doctor
        </NavLink>
       
        <NavLink
          to="/patients"
          exact
          style={style}
          activeStyle={{
            background: "red",
          }}
        className="NavLink">
          Patients
        </NavLink>
      </div>
    );
  }

  export default NavBar
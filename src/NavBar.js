import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
      <div style={{backgroundColor:"#00cc99"}}>
      
       
        <NavLink
          to="/"
          end
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              margin: "0 10px 10px",
              width: "60px",
              padding: "10px",
              
              color: isActive ? "red" : "black",
              textDecoration: isActive ? "underline" : "none"
            };
          }}
          
        className="NavLink">
         Home
        </NavLink>


        <NavLink
          to="/doctors"
          end
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black",
              textDecoration: isActive ? "underline" : "none"
            };
          }}
         
        >
          Doctor
        </NavLink>
      </div>
    );
  }

  export default NavBar
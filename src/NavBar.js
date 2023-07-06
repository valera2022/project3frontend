import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
      <div>
      
       
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
            };
          }}
         
        >
          Doctor
        </NavLink>
      </div>
    );
  }

  export default NavBar
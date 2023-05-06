import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(result =>{})
    .catch(error => console.log(error));
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/Login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && <span className="text-white">Welcome {user.email} <button className="btn-signout" onClick={handleLogOut}>Sign Out</button></span> }
      </div>
    </nav>
  );
};

export default Header;

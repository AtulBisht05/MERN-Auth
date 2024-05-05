import React, { useEffect } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authToken, authUser, Logout } = userAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);
  return (
    <nav className="bg-slate-300 flex justify-between items-center w-full">
      <div className="flex justify-center items-center gap-5 font-bold mx-1">
        <Link to="/">
          <div className="hover:bg-black hover:text-white p-2">Home</div>
        </Link>
        <Link to="/services">
          <div className="hover:bg-black hover:text-white p-2">Services</div>
        </Link>
        <Link to="/contact">
          <div className="hover:bg-black hover:text-white p-2">Contact us</div>
        </Link>
        <Link to="/about">
          <div className="hover:bg-black hover:text-white p-2">About</div>
        </Link>
      </div>
        <div className="flex justify-center items-center px-1">
        {
          <div className="flex justify-center items-center">
            <div className="text-blue-600 font-mono font-bold px-1">
              {authUser && authUser.username}
            </div>
          </div>
        }
        <div
          className="hover:text-white hover:bg-black font-bold text-black p-2 cursor-pointer"
          onClick={Logout}
        >
          Logout
        </div>
        </div>
        
      
    </nav>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { userAuth } from "../context/AuthContext";

const Register = () => {
  const users = {
    fullName: "",
    email: "",
    password: "",
  };

  const [passShow, setPassShow] = useState(false);
  const [user, setUser] = useState(users);
  const { authToken } = userAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (authToken) {
      navigate("/home");
    }
  }, [authToken]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/api/register", user)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            duration: 3000,
            position: "top-right",
          });
          navigate("/login");
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            duration: 3000,
            position: "top-right",
          });
        });
    } catch (err) {
      toast.error(err, {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div className="bg-slate-200 h-svh">
        <div className="flex justify-center">
          <div className="h-[90%] w-full md:w-3/4 m-5">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-700 ">
                Register Here
              </h1>
            </div>
            <form onSubmit={submitForm}>
              <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <div className="">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    // required
                    onChange={handleChange}
                    placeholder="Username"
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // required
                    onChange={handleChange}
                    placeholder="Email"
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  />
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <input
                    type={!passShow ? "password" : "text"}
                    id="password"
                    name="password"
                    // minLength={8}
                    onChange={handleChange}
                    placeholder="Password"
                    // required
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  />
                  <div
                    className="showpass font-bold p-1 text-gray-600"
                    onClick={() => setPassShow(!passShow)}
                  >
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
              <div className="text-center mt-7 mb-7">
                <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">
                  Register
                </button>
              </div>
            </form>
            <div className="text-center my-6 flex flex-col">
              <span className="text-sm text-gray-400"> Already a User? </span>
              <Link
                to="/login"
                className="text-sm font-bold text-gray-400 hover:text-blue-500 m-1"
              >
                Click here to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

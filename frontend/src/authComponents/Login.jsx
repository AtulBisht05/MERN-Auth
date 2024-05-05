import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { userAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setAuthToken, setAuthUser, authToken } = userAuth();
  const [passShow, setPassShow] = useState(false);

  const users = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(users);

  useEffect(() => {
    if (authToken) {
      navigate("/home");
    }
  }, [authToken]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/api/login", user)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            duration: 3000,
            position: "top-right",
          });
          console.log("myToken", res.data.data.token);
          console.log("User", res.data.data.user);

          localStorage.setItem("token", JSON.stringify(res.data.data.token));
          localStorage.setItem("user", JSON.stringify(res.data.data.user));

          setAuthToken(res.data.data.token);
          setAuthUser(res.data.data.user);
          navigate("/home");
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            duration: 3000,
            position: "top-right",
          });
        });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message, {
        duration: 3000,
        position: "top-right",
      });
    }
  };
  return (
    <>
      <div className="bg-slate-200 h-svh">
        <div className="flex  justify-center ">
          <div className="h-[90%] w-full md:w-3/4 m-4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-700 m-3">
                Log In
              </h1>
              <div className="flex gap-3">
                <FcGoogle size="50px" />
                <FaFacebookSquare color="blue" size="50px" />
              </div>
              <div className="text-gray-700 font-semibold"> or </div>
            </div>

            <form onSubmit={submitForm}>
              <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <div className="">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    // required
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
              <div className="text-center mt-7">
                <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">
                  login
                </button>
              </div>
            </form>
            <div className="text-center my-6 flex flex-col">
              <div className="text-sm font-medium text-gray-400 hover:text-blue-500 m-1">
                <Link to="/forgotPassword">Forgot Password ?</Link>
              </div>
              <div className="text-sm font-bold text-gray-400 hover:text-blue-500 m-1">
                <Link to="/register">Not a User? Create New Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

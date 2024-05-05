import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const ForgetPassword = () => {
  const { authToken } = userAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      navigate("/home");
    }
  }, [authToken]);

  const [email, setEmail] = useState("");

  // axios.defaults.withCredentials = true;
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/api/forgot-password", { email })
        .then((res) => {
          console.log(res);
          if (res.data) {
            toast.success(res.data.message, { position: "top-right" });
            navigate("/login");
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            toast.error("Email not found", { position: "top-right" });
          } else {
            toast.error("Server error", { position: "top-right" });
          }
        });
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div>
      <div className="bg-slate-200 h-svh">
        <div className="flex  justify-center ">
          <div className="h-[90%] w-full md:w-3/4 m-4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-3xl text-gray-700 m-3">
                Forgot Password
              </h1>
            </div>

            <form onSubmit={submitForm}>
              <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="text-center mt-7">
                <button
                  type="submit"
                  className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

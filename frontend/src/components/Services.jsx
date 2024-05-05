import React, { useEffect } from "react";
import { userAuth } from "../context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Services = () => {
  const { authToken } = userAuth();

  const navigate = useNavigate();
  // console.log(authUser.username)

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center  "></div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-7xl ">
          <h1 className="text-xl md:text-[50px] text-gray-700 font-bold mt-5 ">
            Services
          </h1>
          <div className="flex flex-col justify-center items-center xl:flex-row m-8 w-[80%] lg:w-full">
            <div className="flex flex-col items-center justify-center m-6 px-6 lg:w-1/3 w-full ">
              <h1 className="text-gray-700 text-2xl font-bold">Service</h1>
              <div className="flex items-center justify-center flex-col space-y-2 mt-5 ">
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="https://www.esearchlogix.com/wp-content/uploads/2022/04/web-left-banner.jpg"
                    className="w-[20%] md:w-[5%]"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold mt-3">Web Development</h1>
                </div>
                <h1 className="text-justify text-gray-700 md:w-[250px]">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </h1>
              </div>
              <div className="flex items-center justify-center flex-col space-y-2 mt-5">
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg?w=2000"
                    className="w-[20%] md:w-[5%]"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold mt-2">UI/UX Design</h1>
                </div>
                <h1 className="text-justify text-gray-700 md:w-[250px]">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </h1>
              </div>
              <div className="flex items-center justify-center flex-col space-y-2 mt-3">
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="https://webconsulting.ie/wp-content/uploads/2020/09/cropped-logo-Web-Consulting.png"
                    className="w-[20%] md:w-[5%]"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold mt-5">Web Consulting</h1>
                </div>
                <h1 className="text-justify text-gray-700 md:w-[250px]">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </h1>
              </div>
            </div>
            <div className="w-60 lg:w-96 h-60 lg:h-96 overflow-hidden  ">
              <img
                src="https://source.unsplash.com/300x400/?computer"
                className="h-full w-full"
                alt=""
              />
            </div>
            <div className="flex flex-col m-6 px-6 xl:w-1/3 w-full items-center justify-center">
              <div className="flex flex-col items-start">
                <h1 className="text-gray-700 text-2xl font-bold">
                  Web specialist based in India
                </h1>
                <p className="text-justify text-gray-700 md:w-[250px] mt-5">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </p>
                <p className="text-justify text-gray-700 md:w-[250px] mt-5">
                  Tailblocks provides best Tailwind CSS components. Visit our
                  website and feel free to give feedback.
                </p>
                <button className="mt-5 px-6 py-1 text-lg text-white hover:bg-gray-800 bg-gray-700">
                  Hire me
                </button>
              </div>
              <div className="flex space-x-6 mt-5">
                <div className="flex flex-col ">
                  <div className="flex space-x-1">
                    <h1 className="text-2xl font-semibold mt-3">13</h1>
                    <h1 className="text-xl mt-[14px] font-semibold ">Years</h1>
                  </div>
                  <h1 className=" text-gray-700 ">Experience</h1>
                </div>
                <div className="flex flex-col ">
                  <div className="flex space-x-1">
                    <h1 className="text-2xl font-semibold mt-3">256</h1>
                    <h1 className="text-xl font-bold mt-3">+</h1>
                  </div>
                  <h1 className=" text-gray-700 ">Clients</h1>
                </div>
                <div className="flex flex-col ">
                  <div className="flex space-x-1">
                    <h1 className="text-2xl font-semibold mt-3">99.8</h1>
                    <h1 className="text-lg font-bold mt-3">%</h1>
                  </div>
                  <h1 className=" text-gray-700 ">Satisfaction</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

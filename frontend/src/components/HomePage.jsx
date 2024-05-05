import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { authToken } = userAuth();

  const navigate = useNavigate();
  // console.log(authUser.username)

  useEffect(() => {
    if (authToken) {
      navigate("/home");
    }
  }, [authToken]);
  return (
    <>
      <div className="fixed w-full flex justify-center  bg-slate-300">
        <nav className="self-center w-full mx-2">
          <div className="flex justify-between items-center ">
            <div className="uppercase text-lg font-sans font-bold">hero</div>

            <div className="font-bold hover:text-white hover:bg-black p-2">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-center p-8 lg:min-h-svh">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
            <div className="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
              <div className="flex flex-col  items-start space-y-3 mt-5">
                <div className="text-3xl md:text-5xl font-bold px-8">
                  Design is a journey of
                </div>
                <div className="text-3xl text-center text-orange-500 md:text-5xl font-bold px-8">
                  Discovery
                </div>
                <div className="h-1 rounded-2xl w-20 bg-orange-500 ml-10"></div>
              </div>
              <button className="">
                <ion-icon
                  name="caret-forward-outline"
                  className="mt-2 p-2 bg-orange-500 rounded-full text-3xl text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500"
                ></ion-icon>
              </button>
            </div>
            <div className="flex space-x-2 md:space-x-6 md:m-4 w-1/2">
              <div className=" w-96 h-60 lg:h-96  overflow-hidden ">
                <img
                  src="https://source.unsplash.com/300x400/?design"
                  className="h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="flex items-center justify-center text-center bg-blue-500 lg:min-h-svh">
        <div className="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
          <div className="flex flex-col p-2 m-2 max-w-7xl">
            <div className="text-xl md:text-3xl font-medium">Our Team</div>

            <div className="flex items-center justify-center lg:flex-row flex-col space-x-4 space-y-4 p-2">
              <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div className="h-40 w-40 border-2 border-yellow-400 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://source.unsplash.com/300x300/?girl" alt="" />
                </div>

                <div className="text-md text-white cursor-pointer w-[50%] bg-yellow-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  Designer
                </div>
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div className="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem deserunt, dolorum illo consequatur, natus aut,
                  esse dignissimos rem facilis ipsa numquam
                </div>
              </div>
              <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div className="h-40 w-40 border-2 border-green-400 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://source.unsplash.com/300x300/?boy" alt="" />
                </div>

                <div className="text-md text-white cursor-pointer w-[50%] bg-green-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  Front-end
                </div>
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div className="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem deserunt, dolorum illo consequatur, natus aut,
                  esse dignissimos rem facilis ipsa numquam
                </div>
              </div>
              <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-400 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?boy,man"
                    alt=""
                  />
                </div>

                <div className="text-md text-white cursor-pointer w-[50%] bg-cyan-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  CEO
                </div>
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Arkay
                </div>
                <div className="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem deserunt, dolorum illo consequatur, natus aut,
                  esse dignissimos rem facilis ipsa numquam
                </div>
              </div>
              <div className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4">
                <div className="h-40 w-40 border-2 border-fuchsia-400 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://source.unsplash.com/300x300/?girl" alt="" />
                </div>

                <div className="text-md text-white cursor-pointer w-[50%] bg-fuchsia-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                  Deployer
                </div>
                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Ashley Adams
                </div>
                <div className="text-left m-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem deserunt, dolorum illo consequatur, natus aut,
                  esse dignissimos rem facilis ipsa numquam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="flex justify-center items-center lg:min-h-svh">
        <div className="flex flex-col justify-center items-center max-w-7xl ">
          <h1 className="text-xl md:text-[30px] text-gray-700 font-bold mt-5 ">
            Services
          </h1>
          <div className="flex flex-col justify-center items-center xl:flex-row m-8 w-[80%] lg:w-full">
            <div className="flex flex-col items-center justify-center m-6 px-6 lg:w-1/3 w-full ">
              <h1 className="text-gray-700 text-2xl font-bold">Our Service</h1>
              <div className="flex items-center justify-center flex-col space-y-2 mt-5 ">
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src="https://www.esearchlogix.com/wp-content/uploads/2022/04/web-left-banner.jpg"
                    className="w-[20%] md:w-[5%]"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold mt-3">
                    Web Development
                  </h1>
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
      <div>
        <hr />
      </div>
      <div className="flex justify-center bg-blue-500 lg:min-h-svh">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-white text-3xl font-medium">
            Our Trusted Clients
          </div>
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img
                      src="https://source.unsplash.com/150x150/?man,boy"
                      alt=""
                      className="rounded-full"
                    />
                    <div className="text-stone-600 font-medium m-2">
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes.
                    </div>
                    <div className="font-bold">John Doe</div>
                    <div className="text-cyan-600 italic">
                      <a href="#">Board Director of Tailblocks</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img
                      src="https://source.unsplash.com/150x150/?girl"
                      alt=""
                      className="rounded-full"
                    />
                    <div className="text-stone-600 font-medium m-2">
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes.
                    </div>
                    <div className="font-bold">Jessie</div>
                    <div className="text-cyan-600 italic">
                      <a href="#">MD of Tailblocks</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <img
                      src="https://source.unsplash.com/150x150/?girl,woman"
                      alt=""
                      className="rounded-full"
                    />
                    <div className="text-stone-600 font-medium m-2">
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes.
                    </div>
                    <div className="font-bold">Davina Claire</div>
                    <div className="text-cyan-600 italic">
                      <a href="#">Board Director of Tailblocks</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-around lg:min-h-svh">
        <div className=" m-2 items-start relative w-full flex flex-row justify-between mt-8 ml-8 mr-8 max-w-7xl">
          <div className="relative">
            <div className="bg-white p-3 space-y-10 md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-4">
              <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                <h1 className="text-blue-600 text-xl font-medium">Company</h1>
                <br />
                <p className="text-gray-500 font-medium text-base hover:text-blue-600 ">
                  A123 Lost Street <br />
                  Chandigarh, PB 535022 <br /> India
                </p>
                <br />
                <p className="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer">
                  <strong className="tracking-wide text-blue-600 font-normal">
                    Phone:
                  </strong>
                  +91 7008090111
                </p>
                <p className="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer">
                  <strong className="tracking-wide text-blue-600 font-normal">
                    Email:
                  </strong>
                  info@gmail.com
                </p>
              </div>
              <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
                <h1 className="text-blue-600 text-xl font-medium tracking-[0.030rem]">
                  Useful Links
                </h1>
                <ul className="mt-2 text-gray-500 font-medium">
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Services
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="leading-9 md:w-3/4 md:order-4">
                <h1 className="text-blue-600 text-xl font-medium tracking-[0.030rem]">
                  Our Services
                </h1>
                <ul className="mt-2 text-gray-500 font-medium">
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Product Management
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right text-blue-600"></i>
                    <a href="#" className="hover:text-blue-600">
                      Graphic Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:order-2 lg:order-last">
                <h1 className="text-blue-600 text-xl font-medium tracking-[0.030rem]">
                  Join Our Newsletter
                </h1>
                <br />
                <p className="text-gray-500 font-medium w-3/5 leading-7 mb-5 md:w-3/4">
                  Join 25,000+ others and never miss out on new tips,tutorials,
                  and more.
                </p>
                <input
                  type="email"
                  placeholder="Enter E-mail Here"
                  className="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:bordermd:w-1/2 lg:w-3/5 border"
                />
                <button className="text-white bg-blue-600 p-1 -translate-x-1 rounded-br-xl hover:bg-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:flex hidden bg-gray-900 p-3 flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
              <div className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                <p>
                  @ Copyright <strong>Company.</strong>All Rights Reserved
                </p>
                <p>
                  Designed by <span className="text-blue-600">TailwindCSS</span>
                </p>
              </div>
              <div className="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i className="fa fa-google"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

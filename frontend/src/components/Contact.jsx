import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const contacts = {
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };
  const [contact, setContact] = useState(contacts);
  const { authToken, authUser } = userAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/api/contact", contact)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            duration: 3000,
            position: "top-right",
          });
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
    <div>
      <Navbar />
      <div className="grid md:block ">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-72 flex justify-center w-full">
          <div className="mt-10 text-white text-4xl font-bold">
            GET IN TOUCH
          </div>
        </div>
        <div className="bg-white h-auto flex justify-center">
          <div className="bg-white shadow-lg -mt-40 md:w-1/2 grid lg:flex justify-center">
            <div className="w-3/4 lg:w-2/3 ">
              <div className="text-lg font-medium text-blue-600 m-6 ">
                Drop a Message
              </div>
              <form onSubmit={submitForm}>
                <div className=" flex lg:flex-row flex-col">
                  <div className="m-6">
                    <p className="text-sm text-stone-400">Full Name</p>
                    <input
                      className="border-b-2 border-stone-400 text-stone-400 w-36 p-1"
                      type="text"
                      name="fullname"
                      id="fullname"
                      // value={authUser && authUser.username}
                      // defaultValue={authUser && authUser.username}
                      onChange={handleChange}
                      required
                      max={100}
                    />
                    <p className="text-sm text-stone-400 mt-6">E-mail</p>
                    <input
                      className="border-b-2 border-stone-400 text-stone-400 w-36 p-1"
                      type="email"
                      name="email"
                      id="email"
                      // defaultValue={authUser && authUser.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="m-6 ">
                    <p className="text-sm text-stone-400">Phone</p>
                    <input
                      className="border-b-2 border-stone-400 text-stone-400 w-36 p-1"
                      type="tel"
                      name="phone"
                      id="phone"
                      minLength={10}
                      maxLength={10}
                      required
                      onChange={handleChange}
                    />
                    <p className="text-sm text-stone-400 mt-6">Subject</p>
                    <input
                      className="border-b-2 border-stone-400 text-stone-400 w-36 p-1"
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="m-6 ">
                  <p className="text-sm text-stone-400 mt-6 ">Message</p>
                  <input
                    className="border-b-2 border-stone-400 text-stone-400 w-36 p-1"
                    type="text"
                    name="message"
                    id="message"
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <button className="m-4 mt-6 pl-4 pt-1 pb-1 pr-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl text-white font-medium w-36 ">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:w-1/3 bg-green-500 ">
              <div className="text-white m-6 font-medium">
                Contact Information
              </div>
              <div className="text-white m-6 text-sm flex">
                <ion-icon name="location-sharp" className="m-2"></ion-icon>
                <div> 4329 Travis Street, Red Fort L.A., 34950 </div>
              </div>
              <div className="text-white m-6 text-sm flex">
                <ion-icon name="call-outline" className="m-2"></ion-icon>
                <div> XXX-XXXX-XXX </div>
              </div>
              <div className="text-white m-6 text-sm flex">
                <ion-icon name="mail-outline" className="m-2"></ion-icon>
                <div> abc.org </div>
              </div>
              <div className="text-white m-6 text-sm flex">
                <ion-icon name="globe-outline" className="m-2"></ion-icon>
                <div> abc.org </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

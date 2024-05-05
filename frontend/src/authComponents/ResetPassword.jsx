import axios from "axios";
import { useState, useEffect } from "react";
import { userAuth } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { authToken } = userAuth();
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authToken) {
      navigate("/home");
    }
  }, [authToken]);



  const submitForm = async(e) => {
    e.preventDefault();
    try {
       await axios
        .post(`http://localhost:4000/api/reset-password/${id}/${token}`, { password })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, { position: "top-right" });
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error, { position: "top-right" });
          console.log(error)
          toast.error("Your link has expired", { position: "top-right" });
        });
    } catch (error) {
      console.log(error)
      toast.error(response.data.message, { position: "top-right" });
    }
  };

  return (
    <>
      <div>
        <div className="bg-slate-200 h-svh">
          <div className="flex  justify-center ">
            <div className="h-[90%] w-full md:w-3/4 m-4">
              <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                <h1 className="font-semibold text-3xl text-gray-700 m-3">
                  Reset Password
                </h1>
              </div>

              <form onSubmit={submitForm}>
                <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    // required
                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  />
                </div>
                <div className="text-center mt-7">
                  <button type="submit" className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

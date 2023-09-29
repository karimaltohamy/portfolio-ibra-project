import React, { useContext, useState } from "react";
import { UserContaxt } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import apiRequest from "../../utils/apiRequest";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error,user, dispatch } = useContext(UserContaxt);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault()

    dispatch({ type: "LOADING" });
    try {
      const { data } = await apiRequest.post("/auth/login", inputs);
      dispatch({ type: "SUCCESS", payload: data.info });
      navigate("/");
      toast.success("login successfull");
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR", payload: error });
    }
  };

  if (user) {
    return <Navigate to={"/"} /> 
  }

  return (
    <div
      className="login_page h-[100vh] w-full flex items-center justify-center bg-blue-100 p-5 relative"
      style={{ background: "linear-gradient(-45deg,#9941fc 20%,#0ab39c)" }}
    >
      {loading ? <Loader /> : <div className="content p-5 borde rounded bg-white w-full max-w-[500px]">
        <div className="head text-center pt-3 pb-8 ">
          <h4 className="text-[20px] font-semibold">Welcome Back !</h4>
          <p className="text-[15px] text-gray-500">Sign in to continue </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input_item mb-5">
            <label htmlFor="email" className="text-[18px] font-medium block">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border border-gray-300 rounded p-[6px] w-full text-[14px]"
              placeholder="your email"
              onChange={handleChange}
            />
          </div>
          <div className="input_item mb-5">
            <label htmlFor="password" className="text-[18px] font-medium block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded p-[6px] w-full text-[14px]"
              placeholder="your password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn_submit w-full p-1 rounded bg-[#9941FC] text-white"
          >
            Login
          </button>
        </form>
      </div>}
    </div>
  );
};

export default Login;

import React, { useState } from "react";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.id]: e.target.value})
    }

    const handleLogin = () => {
        console.log(inputs);
    }

  return (
    <div
      className="login_page h-[100vh] w-full flex items-center justify-center bg-blue-100 p-5"
      style={{ background: "linear-gradient(-45deg,#9941fc 20%,#0ab39c)" }}
    >
      <div className="content p-5 borde rounded bg-white w-full max-w-[500px]">
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
      </div>
    </div>
  );
};

export default Login;

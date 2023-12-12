import React, { useEffect, useState } from "react";
import { FaArrowRight, FaRegUser } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdLockOutline, MdOutlineMailOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Logo } from "../componentsRoute";
import { useRefContext } from "../context/RefContext";

import { useAuthContext } from "../context/AuthContext";
import { useSignUp } from "../hooks/useSignUp";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useAuthContext();
  const { signUp, error, success } = useSignUp();
  const ref = useRefContext();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  const resetStates = () => {
    setName("");
    setUserName("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(error);
    await signUp(name, userName, password);
    resetStates();
    // console.log(error, success);
  };

  return (
    <div className="user-form-container">
      <span className="flex flex-col items-center gap-2">
        <Logo />
        <h3 className="user-form-header">Sign Up to create account</h3>
        <p className="dark:text-neutral-200 text-neutral-600">
          Already have an account?
          <NavLink
            to="/login"
            className="font-medium px-2 text-blue-400 hover:underline cursor-pointer"
          >
            Log In
          </NavLink>
        </p>
      </span>
      <form className="user-form-body" onSubmit={handleSubmit}>
        <div className="user-input-row">
          <label htmlFor="name" className="user-input-label">
            <FaRegUser />
          </label>
          <span className="user-input-container">
            <input
              type="text"
              placeholder="Name"
              className="user-input"
              id="name"
              ref={ref}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
          </span>
        </div>

        <div className="user-input-row">
          <label htmlFor="username" className="user-input-label">
            <MdOutlineMailOutline />
          </label>
          <span className="user-input-container ">
            <input
              type="email"
              placeholder="Email"
              className="user-input"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
          </span>
        </div>

        <div className="user-input-row">
          <label htmlFor="password" className="user-input-label">
            <MdLockOutline />
          </label>
          <span className="user-input-container user-input-password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="user-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              spellCheck="false"
            />
            <button
              onClick={togglePassword}
              onKeyDown={togglePassword}
              type="button"
              className="password-toggle-btn"
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </button>
          </span>
        </div>

        <button
          type="submit"
          className="user-form-btn disabled:bg-opacity-50"
          disabled={success}
        >
          <span className="flex items-baseline gap-3">
            Create account
            <FaArrowRight className="text-sm font-normal" />
          </span>
        </button>
        {error && (
          <span className="error-msg-block">
            <p className="p-2">{error}</p>
          </span>
        )}
        {success ? (
          <span className="">
            <p className="text-sm font-medium dark:text-neutral-200 text-neutral-600">Account Created Successfully
            <NavLink to="/login" className='font-semibold px-2 dark:text-blue-400 text-blue-500 hover:underline'>Log In</NavLink>
            </p>
          </span>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default SignUp;

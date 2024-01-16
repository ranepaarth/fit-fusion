import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { MdLockOutline, MdOutlineMailOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Logo } from "../componentsRoute";
import { useAuthContext } from "../context/AuthContext";
import { useRefContext } from "../context/RefContext";
import { useLogIn } from "../hooks/useLogIn";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isCopied, setIsCopied] = useState(null);
  const { user } = useAuthContext();
  const { logIn, error, isLoading } = useLogIn();
  const ref = useRefContext();
  useEffect(() => {
    ref.current.focus();
  }, []);
  const emailRef = useRef();
  const pwdRef = useRef();

  const handleEmailCopied = () => {
    setIsCopied(false);
    window.navigator.clipboard.writeText(emailRef.current?.innerText);
    // console.log(emailRef.current);
    setIsCopied(true);
  };
  const handlePwdCopied = () => {
    setIsCopied(false);
    window.navigator.clipboard.writeText(pwdRef.current?.innerText);
    // console.log(pwdRef.current);
    setIsCopied(true);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(userName, password);
  };
  // console.log(isCopied);
  return (
    <div className="user-form-container">
      <form className="user-form-body" onSubmit={handleSubmit}>
        <span className="flex flex-col items-center gap-2">
          <Logo />
          <h3 className="user-form-header">Log In to your account</h3>
          <p className="dark:text-neutral-200 text-neutral-600">
            Don&#39;t have an account?
            <NavLink
              to="/signup"
              className="px-2 text-blue-400 hover:underline cursor-pointer font-medium"
            >
              Create a free account
            </NavLink>
          </p>
        </span>
        <div className="flex flex-col items-center gap-2 font-medium text-lg bg-neutral-300 dark:bg-neutral-500 mx- px-4 py-2 rounded mx-10">
          <span className="flex flex-row items-center w-full justify-between">
            <p className="text-neutral-800 dark:text-neutral-300">Email:</p>
            <p className="text-blue-700 dark:text-blue-400" ref={emailRef}>
              test3@test.com
            </p>
            <button
              type="button"
              onClick={handleEmailCopied}
              className={
                "text-neutral-800 dark:text-neutral-300 dark:focus:text-green-400 focus:text-green-600"
              }
              id="email-btn"
            >
              {<LuCopy />}
            </button>
          </span>
          <span className="flex items-center justify-between gap-2 w-full">
            <p className="text-neutral-800 dark:text-neutral-300">Password:</p>
            <p className="text-blue-700 dark:text-blue-400" ref={pwdRef}>
              Test@123
            </p>
            <button
              type="button"
              className={
                "text-neutral-800 dark:text-neutral-300 dark:focus:text-green-400 focus:text-green-600"
              }
              id="pwd-btn"
              onClick={handlePwdCopied}
            >
              <LuCopy />
            </button>
          </span>
        </div>
        <div className="user-input-row">
          <label htmlFor="username" className="user-input-label">
            <MdOutlineMailOutline />
          </label>
          <span className="user-input-container">
            <input
              type="text"
              placeholder="Email"
              className="user-input"
              id="username"
              value={userName}
              ref={ref}
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="off"
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

        {isLoading && <span className="loader"></span> }

        <button
          type="submit"
          disabled={user}
          className="user-form-btn disabled:bg-opacity-50"
        >
          <span className="flex items-baseline gap-3">
            Get Started
            <FaArrowRight className="text-sm font-normal" />
          </span>
        </button>
        {error && <span className="error-msg-block">{error}</span>}
      </form>
    </div>
  );
};

export default LogIn;

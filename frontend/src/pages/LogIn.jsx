import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
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
  const { user } = useAuthContext();
  const { logIn, error, isLoading } = useLogIn();
  const ref = useRefContext();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(userName, password);
  };
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

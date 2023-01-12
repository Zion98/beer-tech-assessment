import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, InputField, Loader } from "@/components/elements";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const isLoading = false;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      window.location.href = "/app";
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <div className="max-w-[90%] border-transparent rounded-[20px] bg-[#161d2f] w-96 h-96 px-8 py-6 pt-8">
        <h2 className="text-white text-3xl font-extralight">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start">
          <div className="w-full bg-[#161d2f] my-4">
            <InputField
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e: {
                target: { value: React.SetStateAction<undefined> };
              }) => setEmail(e.target.value)}
              placeholder="Email"
              required={true}
              className="input w-full input-box !bg-[#161d2f] text-white"
            />
          </div>

          <div className="w-full bg-[#161d2f] my-2 relative">
            <InputField
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e: {
                target: { value: React.SetStateAction<undefined> };
              }) => setPassword(e.target.value)}
              placeholder="Password"
              required={true}
              className="input w-full input-box !bg-[#161d2f] text-white autofill:bg-yellow-200"
            />
            <i
              style={{
                position: "absolute",
                top: "1.2rem",
                right: "1rem",
                color: "#000",
              }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </i>
          </div>

          <Button title="Login to your account" />

          <p className="text-white text-center w-full mt-8 text-sm font-extralight">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-[#fc4747]">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

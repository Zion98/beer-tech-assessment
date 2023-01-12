import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "@/assets/profile.svg";

export const SideBar = () => {
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  return (
    <div className="relative bg-[rgb(22, 29, 47)] h-screen w-12 rounded-2xl flex flex-col shrink-0 overflow-y-auto items-center h-screen">
      <div className="fixed h-screen">
        <NavLink to="/" className="pt-6 block">
          <svg
            width="25"
            height="27"
            viewBox="0 0 33 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.4628 0.408386L29.6628 6.80839H24.8628L21.6628 0.408386H18.4628L21.6628 6.80839H16.8628L13.6628 0.408386H10.4628L13.6628 6.80839H8.86279L5.66279 0.408386H4.06279C2.29479 0.408386 0.878793 1.84039 0.878793 3.60839L0.862793 22.8084C0.862793 24.5764 2.29479 26.0084 4.06279 26.0084H29.6628C31.4308 26.0084 32.8628 24.5764 32.8628 22.8084V0.408386H26.4628Z"
              fill="#FC4747"
            />
          </svg>
        </NavLink>

        <div className="absolute bottom-12">
          <img
            src={Profile}
            alt="profile"
            className="w-full h-full rounded-full border-white"
          />

          <button onClick={logout} className="block p-4">
            <svg
              width="14"
              height="21"
              viewBox="0 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.621 1.03773L6.93142 0.457949C3.71084 -0.0481423 2.10055 -0.301188 1.05027 0.596932C0 1.49505 0 3.12511 0 6.38521V9.36914H5.91938L3.21913 5.99384L4.78087 4.74445L8.78087 9.74445L9.28062 10.3691L8.78087 10.9938L4.78087 15.9938L3.21913 14.7444L5.91938 11.3691H0V14.3522C0 17.6123 0 19.2424 1.05027 20.1405C2.10055 21.0386 3.71084 20.7856 6.93143 20.2795L10.621 19.6997C12.2337 19.4463 13.04 19.3196 13.52 18.7583C14 18.197 14 17.3807 14 15.7482V4.98924C14 3.35672 14 2.54046 13.52 1.97917C13.04 1.41788 12.2337 1.29116 10.621 1.03773Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

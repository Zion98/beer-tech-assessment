import React from "react";
import { Outlet } from "react-router-dom";
import movieHeader from "@/assets/movie.svg";

type MainLayoutProps = {
  children: React.ReactNode;
};

const FormLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full flex flex-col justify-center h-screen items-center">
      <img src={movieHeader} alt="movie" className="mb-16" />

      <Outlet />
    </div>
  );
};

export default FormLayout;

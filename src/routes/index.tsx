import { useEffect } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const getUser = JSON.parse(localStorage.getItem("user") as string);

  const auth = { user: false };
  auth.user = getUser?.email && getUser?.password ? true : false;

  const location = useLocation();

  if (auth.user && ["/", "/sign-up"].includes(location.pathname)) {
    return <Navigate to="/app" replace />;
  }

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};

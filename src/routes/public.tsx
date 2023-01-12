import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "@/components/elements";
import FormLayout from "@/Layout/FormLayout";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
// import DashboardPage from "@/pages/Dashboard";

const App = () => {
    

  return (
    <FormLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        }>
        <Outlet />
      </Suspense>
    </FormLayout>
  );
};

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "*", element: <Navigate to="./" /> },
    ],
  },
];

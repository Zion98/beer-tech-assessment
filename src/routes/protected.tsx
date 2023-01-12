import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "@/components/elements";
import DashboardLayout from "@/Layout/DashboardLayout";
import DashboardPage from "@/pages/Dashboard";

const App = () => {
  return (
    <DashboardLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        }>
        <Outlet />
      </Suspense>
    </DashboardLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "/app", element: <DashboardPage /> },
      { path: "*", element: <Navigate to="./" /> },
    ],
  },
];


import React from "react";
import { createBrowserRouter,Navigate } from "react-router-dom";
import HomePage from "./component/HomePage.jsx";
import ErrorPage from "./component/PageNotFound.jsx";
import AboutUsPageData from "./component/AboutUsPageData.jsx";
import Login from "./component/Login";
import AdminDashboard from "./component/AdminDashboard.jsx";
import UserDashboard from "./component/UserDashboard.jsx";

// errorElement: <ErrorPage />,
const AdminRoutes = React.lazy(() => import("./component/admin/AdminRouter"));
// const AdminRoutes = React.lazy( async () => (await import('./component/admin/adminRouter')))
// const AdminRoutes = React.lazy(() => import("./component/admin/routes"));
// const FunctionalComponentRouter = React.lazy(() => import("./functionalComponent/functionalRouter"));
// element: <HomePage />,
const router = createBrowserRouter([
  {
    path: "/",
    element:<Navigate to="/home" replace />,
  },{
    path: "/home",
    element:<HomePage />,
  },{
    path: "/about",
    element:<AboutUsPageData />,
  },{
    path: "/login",
    element:<Login />,
  },{
    path: "/pagenotfound",
    element:<ErrorPage />,
  },{
    path: "/admin/*",
    element: (
      <React.Suspense fallback={<>Loading...</>}>
        <AdminRoutes />
      </React.Suspense>
    ),
  },{
    path: "/user-dashboard",
    element:<UserDashboard />,
  }
  
]);
// ,{
//   path:"*",
//   element:<Navigate to="/pagenotfound" replace />
// }

export default router;






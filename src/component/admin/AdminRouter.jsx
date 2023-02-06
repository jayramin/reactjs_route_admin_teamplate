import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
// import Dashboard from "./01Dashboard.jsx";
import AdminProfile from "./02AdminProfile.jsx";
import DashboardPageData from "./DashboardPageData.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=4
// https://justjayapi.000webhostapp.com/updateusergetmethod?id=4&username=test&password=456&gender=Male
// https://justjayapi.000webhostapp.com/deleteusergetmethod?id=4
function ClassComponentRouter(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="admin-dashboard" replace />} ></Route>
      <Route path="admin-dashboard" element={<DashboardPageData />} />
      <Route path="profile" element={<AdminProfile />} />
    </Routes>
  );
}

export default ClassComponentRouter;
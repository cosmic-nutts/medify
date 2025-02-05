import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';  // ✅ Added useLocation
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/login';
import AllApointments from './pages/Admin/AllApointments';
import Dashboard from './pages/Admin/Dashboard';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';

const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/admin-dashboard":
      return "Dashboard";
    case "/all-appointments":
      return "Appointments";
    case "/add-doctor":
      return "Add Doctor";
    case "/doctor-list":
      return "Doctors List";
    default:
      return "Admin Panel";
  }
};

const App = () => {
  const { aToken } = useContext(AdminContext);
  const location = useLocation();  // ✅ Gets the current route path

  return aToken ? (
    <div className="bg-white min-h-screen">
      <ToastContainer />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-6 w-full">
          {/* ✅ Dynamic Page Title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {getPageTitle(location.pathname)}
          </h1>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-appointments" element={<AllApointments />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/doctor-list" element={<DoctorsList />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;

import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";


const Sidebar = () => {
    const { aToken } = useContext(AdminContext);

    return (
        <div className="min-h-screen bg-white border-r w-60 p-4">
            {aToken && (
                <ul className="text-black mt-5">
                    <NavLink
                        to="/admin-dashboard"
                        className={({ isActive }) =>
                            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                                isActive ? "bg-gray-200 border-r-4 border-green-500" : ""
                            }`
                        }
                    >
                        <img src={assets.home_icon} alt="Dashboard" className="w-6" />
                        <p>Dashboard</p>
                    </NavLink>

                    <NavLink
                        to="/all-appointments"
                        className={({ isActive }) =>
                            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                                isActive ? "bg-gray-200 border-r-4 border-green-500" : ""
                            }`
                        }
                    >
                        <img src={assets.appointment_icon} alt="Appointments" className="w-6" />
                        <p>Appointments</p>
                    </NavLink>

                    <NavLink
                        to="/add-doctor"
                        className={({ isActive }) =>
                            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                                isActive ? "bg-gray-200 border-r-4 border-green-500" : ""
                            }`
                        }
                    >
                        <img src={assets.add_icon} alt="Add Doctor" className="w-6" />
                        <p>Add Doctors</p>
                    </NavLink>

                    <NavLink
                        to="/doctor-list"
                        className={({ isActive }) =>
                            `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                                isActive ? "bg-gray-200 border-r-4 border-green-500" : ""
                            }`
                        }
                    >
                        <img src={assets.people_icon} alt="Doctors List" className="w-6" />
                        <p>Doctors List</p>
                    </NavLink>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaHotel, } from 'react-icons/fa';

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-orange-400 text-black font-bold">
                  
                    <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
                    <li><Link to='/dashboard/selectedClass'> <FaHotel></FaHotel> My Selected Class</Link></li>
                    <li><Link to='/dashboard/enroll'> <FaHotel></FaHotel> My Enroll Class</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;
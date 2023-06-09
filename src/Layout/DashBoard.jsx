import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaHotel, } from 'react-icons/fa';

const DashBoard = () => {
    const isAdmin = true;
    const isInstructor = true;
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

                    {
                        isAdmin ? <>

                            <li><Link to='/'> <FaHome></FaHome> Admin Home</Link></li>
                            <li><Link to='/dashboard/allUsers'> <FaHotel></FaHotel> Manager Student</Link></li>
                            <li><Link to='/dashboard/'> <FaHotel></FaHotel>All Classes</Link></li>
                        </> : <>
                            {
                                isInstructor ? <>
                                    <li><Link to='/'> <FaHome></FaHome> Instructor Home Home</Link></li>
                                    <li><Link to='/dashboard/selectedClass'> <FaHotel></FaHotel> All Students</Link></li>
                                    <li><Link to='/dashboard/enroll'> <FaHotel></FaHotel>Add a Class</Link></li>
                                </> : <>

                                    <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
                                    <li><Link to='/dashboard/selectedClass'> <FaHotel></FaHotel> My Selected Class</Link></li>
                                    <li><Link to='/dashboard/enroll'> <FaHotel></FaHotel> My Enroll Class</Link></li>
                                </>
                            }

                        </>
                    }

                    {/* <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
                    <li><Link to='/dashboard/selectedClass'> <FaHotel></FaHotel> My Selected Class</Link></li>
                    <li><Link to='/dashboard/enroll'> <FaHotel></FaHotel> My Enroll Class</Link></li> */}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;
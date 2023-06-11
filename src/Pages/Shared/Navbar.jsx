import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

    const handleLogOut = () => {
        logOut()  
    }
    const navItems = <>

        <NavLink to='/'> <li><button className='btn-style'>Home</button></li></NavLink>
        <NavLink to='/allInstructors'> <li ><button className=' btn-style'>Instructor</button></li></NavLink>
        <NavLink to='/allClasses'> <li><button className=' btn-style'>Classes</button></li></NavLink>
        {
            user? <>
             <NavLink to='dashboard/welcome'> <li className=' btn-style'>DashBoard</li></NavLink>
            </> : <></>
        }
    </>
    
    return (
        <>
            <div className="navbar fixed z-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                            {navItems}
                        </ul>
                    </div>
                    <div className="avatar lg:mr-2">
                        <div className="w-16 rounded-full">
                            <img src="https://i.ibb.co/0FsCw2J/al.webp" />
                        </div>
                    </div>
                    <a className="font-bold cursor-pointer  normal-case lg:text-4xl text-teal-950	">Easy Language</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="avatar">
                                <div className="w-12 rounded-full border-2 border-orange-800  ">
                                    <img className=' cursor-pointer ' referrerPolicy='no-referrer' onClick={() => setIsOpen(!isOpen)} src={user?.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className=' btn-style'>Log Out</button>
                        </> :
                            <>
                                <Link to='/login'> <button className=' btn-style'>Login Now</button></Link>
                            </>

                    }
                    {
                        isOpen &&
                        <div className=' absolute rounded-xl  overflow-hidden right-5 top-16 w-[10vw] shadow-xl'>
                            <button onClick={handleLogOut} className=' btn-style'>Log Out</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;
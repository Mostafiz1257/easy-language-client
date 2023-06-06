import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <Link> <li><button className='btn-style'>Home</button></li></Link>
        <Link> <li ><button className=' btn-style'>Instructor</button></li></Link>
        <Link> <li><button className=' btn-style'>Classes</button></li></Link>
        <Link> <li><button className=' btn-style'>DashBoard</button></li></Link>
        <Link> <li><button className=' btn-style'>Logo</button></li></Link>

    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Easy Language</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link> <button className=' btn-style'>Login Now</button></Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
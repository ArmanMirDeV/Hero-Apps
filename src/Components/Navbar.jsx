import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import githubIcon from '../assets/github.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apps">Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to="/installation">
                                Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to='/' className=" flex"><span><img className='h-10 w-10' src={logo} alt="logo" /></span> <span className="text-4xl font-extrabold bg-gradient-to-r from-[#632ee3] via-purple-500 to-[#9f62f2] bg-clip-text text-transparent" >HERO.IO</span></Link>
            </div>
            <div className="navbar-center ">

            </div>
            <div className='navbar-center' >
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apps">Apps</NavLink>
                    </li>
                    <li>
                        <NavLink to="/installation">Installation</NavLink>
                    </li>

                </ul>

            </div>
            <div className="navbar-end ">


                <a href='https://github.com/ArmanMirDeV' target='_blank' className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white  "> <span><img src={githubIcon} alt="github icon" /></span> Contribute</a>

            </div>
        </div>
    );
};

export default Navbar;
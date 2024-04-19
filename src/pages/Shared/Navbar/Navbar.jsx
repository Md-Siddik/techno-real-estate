import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import userImage from "../../../../assets/image/user.jpg"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/userProfile">User Profile</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/best">Best Products</NavLink></li>
    </>

    return (
        <div className="container m-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn text-2xl font-bold">TechnoEstate</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    {
                        user && <div className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom z-[999]" data-tip={user.displayName}>
                            {
                                user && <div className="w-full rounded-full">
                                    <img alt="Profile" src={user.photoURL ? user.photoURL : userImage} />
                                </div>
                            }
                        </div>
                    }
                    <div className="hidden lg:block btn-info">
                        {
                            user ?
                                <button onClick={handleSignOut} className="btn">Sigh Out</button>
                                :
                                <Link to="/login">
                                    <button className="btn">Login</button>
                                </Link>

                        }
                    </div>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-[120px]">
                        {navLinks}
                        {
                            user ?
                                <button onClick={handleSignOut} className="btn">Sigh Out</button>
                                :
                                <Link to="/login">
                                    <button className="btn">Login</button>
                                </Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
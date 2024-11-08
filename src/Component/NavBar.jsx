import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="bg-purple-600 w-full rounded-lg p-5 mb-10">
            {/* Navbar Section */}
            <div className="navbar text-white shadow-lg rounded-lg p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" aria-label="Toggle navigation menu" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content text-white rounded-lg shadow-lg mt-3 w-52 p-2">
                            <li>
                                <NavLink className={({ isActive }) =>`font-bold ${isActive ? 'underline' : 'hover:text-gray-200'}`} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>`font-bold ${isActive ? 'underline' : 'hover:text-gray-200'}`} to="/Statistics">
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>`font-bold ${isActive ? 'underline' : 'hover:text-gray-200'}`} to="/Dashboard">
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <span className="text-2xl font-bold">Gadget Heaven</span>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <li>
                            <NavLink className={({ isActive }) =>`font-bold ${isActive ? 'underline' : 'hover:text-gray-200'}`} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>`font-bold ${isActive ? 'underline' : 'hover:text-gray-200'}`} to="/Statistics">
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>`font-bold ${isActive ? 'underline' : 'hover:text-gray-200'}`} to="/Dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex gap-3">
                    <i className="fa-solid fa-cart-shopping bg-white text-purple-800 rounded-full p-2"></i>
                    <i className="fa-regular fa-heart bg-white text-purple-800 rounded-full p-2"></i>
                </div>
            </div>

            {/* Banner Section */}
            
        </div>
    );
};

export default NavBar;

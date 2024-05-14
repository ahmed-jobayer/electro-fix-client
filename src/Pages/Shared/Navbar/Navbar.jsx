// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProviders";


const Navbar = () => {

    // const {user} = useContext(AuthContext)
    
  const options = (
    <>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/services">
          <a>Services</a>
        </NavLink>
      </li>
    </>
  );

  const Dashboard = (
    <>
      <li>
        <NavLink>
          <a className="w-full">Add Service</a>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <a>Manage Service</a>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <a>Booked-Services</a>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <a>Service-To-Do</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {options}
            <li>
              <a>Dashboard</a>
              <ul className="p-2 flex flex-col gap-1"> {Dashboard} </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Electro Fix</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {options}
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 w-40 flex flex-col gap-1">{Dashboard}</ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end  ">
       {/* {
        user ?  <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <NavLink to="/logout">
          <a className="btn">Log out</a>
        </NavLink>
      </div>
       :
      <NavLink to="/login">
        <a className="btn">Log in</a>
      </NavLink>
       } */}
      </div>
    </div>
  );
};

export default Navbar;

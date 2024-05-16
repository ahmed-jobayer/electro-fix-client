// import { useContext } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        alert("signed out");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const options = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
    </>
  );

  const Dashboard = (
    <>
      <li>
        <NavLink to="/addServices">Add Service</NavLink>
      </li>
      <li>
        <NavLink to='/manageServices'>Manage Service</NavLink>
      </li>
      <li>
        <NavLink to='/bookedService'>Booked-Services</NavLink>
      </li>
      <li>
        <NavLink to='/ServiceToDo'>Service To Do</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBarsStaggered />
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
        <Link to="/" className="btn btn-ghost text-xl">
          Electro Fix
        </Link>
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
        {user ? (
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <NavLink onClick={handleSignOut} className="btn" to="/logout">
              Log Out
            </NavLink>
          </div>
        ) : (
          <NavLink className="btn" to="/login">
            Log In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

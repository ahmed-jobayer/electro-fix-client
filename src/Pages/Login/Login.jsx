import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div><div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center mt-3">
                <p>
                  Already Have an Account?{" "}
                  <span className="ml-2 text-orange-100 font-bold">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaGoogle } from "react-icons/fa";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        alert("login successfull");
        navigate( location?.state ? location.state : '/')
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });

    // console.log('rfererf', email, password)
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleLogin()
      .then(() => {
        alert("google login successful");
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error.message);
        alert(error);
      });
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Login - Electro Fix</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>
              <div className="text-center">Or</div>
              <div
                onClick={handleGoogleLogin}
                className=" flex items-center justify-center border p-2 rounded-lg cursor-pointer"
              >
                <FaGoogle className="mr-2" />
                Login With Google
              </div>
              <div className="text-center mt-3">
                <p>
                  Do Not Have an Account?{" "}
                  <span className="ml-2 text-orange-100 font-bold">
                    <Link to="/register">Register Now</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;

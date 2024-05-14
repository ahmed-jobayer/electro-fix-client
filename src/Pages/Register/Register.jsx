import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {

    const{registerUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const displayName = form.elements.name.value
        const email = form.elements.email.value
        const password = form.elements.password.value
        const photoURL = form.elements.photoUrl.value
        registerUser(email, password, displayName, photoURL)
        .then(() =>{
            alert('registered successfully')
            navigate('/')
        })
        .catch((error) => {
            console.log(error)
            alert(error)
        })
        // console.log(displayName, email, password, photoURL)
    }

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-full">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
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

export default Register;

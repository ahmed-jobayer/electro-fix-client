import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const ServiceDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-8">
        <h3 className="text-center">Service Provider Information</h3>
        <div className="my-8">
          <div className="flex items-center justify-center gap-3">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
            <h3 className="mb-3">Area</h3>
            <h3>Name</h3>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-6xl mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="my-4">
              <h4>Service Price</h4>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-14 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h3>name</h3>
              </div>
              <div className="card-actions justify-end">
                <Link to="/serviceDetails">
                  <button className="btn btn-primary">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;

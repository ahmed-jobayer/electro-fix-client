import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import PopularService from "../Popular Service/PopularService";

const Home = () => {
  return (
    <div className="mx-auto container">
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
        <h2 className="text-center font-bold text-3xl mb-6">
          Popular Services
        </h2>
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
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/allServices">
            <button className="btn btn-primary">Show All Services</button>
          </Link>
        </div>
        <PopularService></PopularService>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

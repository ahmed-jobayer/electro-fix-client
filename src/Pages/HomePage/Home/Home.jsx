import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleService from "../../All Services/SingleService";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://electro-fix-server.vercel.app/services")
      .then((data) => setServices(data.data.slice(0, 6)));
  }, []);

  return (
    <div className="mx-auto container">
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
        <h2 className="text-center font-bold text-3xl mb-6">
          Popular Services
        </h2>
        <div className="my-6 grid grid-cols-2 gap-10">
          {services.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
            
          ))}
        </div>
        <div className="flex justify-center my-4">
          <Link to="/allServices">
            <button className="btn btn-primary">Show All Services</button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

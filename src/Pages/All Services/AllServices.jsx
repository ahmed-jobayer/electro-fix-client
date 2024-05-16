import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import SingleService from "./SingleService";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //   console.log(services)

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="my-6 flex flex-col gap-10">
        <h2 className="text-center my-6 text-3xl">All Services</h2>
        {services.map((service) => (
          <SingleService 
          key={service._id} 
          service={service}></SingleService>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllServices;

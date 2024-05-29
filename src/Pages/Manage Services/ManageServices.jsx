import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";



const ManageServices = () => {

  const [bookedServises, setBookedServices] = useState([])

  // const {_id, serviceName, providerName, price } = bookedServises

  useEffect ( () =>{
    axios.get('http://localhost:5000/bookedServices')
    .then(data => {
      setBookedServices(data.data)
      // console.log(data.data)
    })
  } ,[])

  // console.log(_id, serviceName, providerName, price)

  return (
    <div className="container mx-auto">
        <Navbar></Navbar>
      <div className="overflow-x-auto min-h-screen relative z-40 my-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Service Name</th>
              <th>Provider Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {bookedServises.map((bookedService) => (
             <tr key={bookedService._id} className="hover">
             <td>{bookedService.serviceName}</td>
             <td>{bookedService.providerName}</td>
             <td>{bookedService.price}</td>
             <td><FaEdit className="text-xl cursor-pointer"/></td>
             <td><MdDeleteForever className="text-2xl cursor-pointer"/></td>
           </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageServices;

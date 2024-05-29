import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const ManageServices = () => {
  const [bookedServises, setBookedServices] = useState([]);

  // const {_id, serviceName, providerName, price } = bookedServises

  useEffect(() => {
    axios.get("http://localhost:5000/bookedServices").then((data) => {
      setBookedServices(data.data);
      // console.log(data.data)
    });
  }, []);

  // console.log(_id, serviceName, providerName, price)

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/bookedServices/${_id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              title: "Delete Failed!",
              text: error.message,
              icon: "error",
            });
          });
      }
    });
  };

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
                <td>
                  <FaEdit className="text-xl cursor-pointer" />
                </td>
                <td>
                  <MdDeleteForever
                    onClick={() => handleDelete(bookedService._id)}
                    className="text-2xl cursor-pointer"
                  />
                </td>
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

import { useContext, useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const ManageServices = () => {
  const [bookedServises, setBookedServices] = useState([]);

  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email;
  // console.log(currentUserEmail)
  // const {_id, serviceName, providerName, price } = bookedServises

  useEffect(() => {
    axios
      .get("http://localhost:5000/bookedServices", {
        params: {
          currentUserEmail: currentUserEmail,
        },
      })
      .then((data) => {
        setBookedServices(data.data);
        // console.log(data.data)
      });
  }, [currentUserEmail]);

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
              const remaining = bookedServises.filter(
                (bookedService) => bookedService._id !== _id
              );

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setBookedServices(remaining);
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
  // console.log(bookedServises.length)

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      {bookedServises.length < 1 ? (
        <>
          <div className="min-h-screen flex items-center justify-center">
            <h3>You did not booked any services yet</h3>
          </div>
        </>
      ) : (
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
      )}
      <Footer></Footer>
    </div>
  );
};

export default ManageServices;

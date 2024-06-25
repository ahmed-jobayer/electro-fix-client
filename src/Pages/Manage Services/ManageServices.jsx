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
      .get("https://electro-fix-server.vercel.app/provider/services", {
        params: {
          currentUserEmail: currentUserEmail,
        },
      })
      .then((data) => {
        setBookedServices(data.data);
        console.log(data.data)
      });
  }, [currentUserEmail]);

  // update added services

  // const handleUpdate = (_id) => {
  //   console.log(_id);
  // };

  // console.log(_id, serviceName, providerName, price)

  // delete added services

  const handleDelete = (_id) => {
    // console.log(_id);
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
          .delete(`https://electro-fix-server.vercel.app/provider/services/${_id}`)
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
            <h3>You did not added any services yet</h3>
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
                    <FaEdit
                      // onClick={() => handleUpdate(bookedService._id)}
                      className="text-xl cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    />
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

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-5/6 m-4 shadow-2xl bg-base-100 ">
              <form
                className="card-body lg:grid lg:gap-6 grid-cols-2"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    placeholder=" Image URL of the Service"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    placeholder="Service Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Area</span>
                  </label>
                  <input
                    type="text"
                    name="serviceArea"
                    placeholder="Service Area"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6 col-span-2">
                  <button className="btn btn-primary">Add Service</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <Footer></Footer>
    </div>
  );
};

export default ManageServices;

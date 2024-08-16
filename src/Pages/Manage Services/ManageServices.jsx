import { useContext, useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null)

  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email;
  // console.log(currentUserEmail)
  // const {_id, serviceName, providerName, price } = services

  useEffect(() => {
    axios
      .get("http://localhost:5000/provider/services", {
        params: {
          currentUserEmail: currentUserEmail,
        },
      })
      .then((data) => {
        setServices(data.data);
        // console.log(data.data)
      });
  }, [currentUserEmail]);

  const handleEditIconClick = (service) =>{
    setEditService(service)
    document.getElementById("my_modal_2").showModal()
  }

  // update added services

  const handleUpdateService = (_id, form) => {
    
    const imageUrl = form.imageUrl.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const service = {
      imgURL: imageUrl,
      serviceName,
      price,
      serviceArea,
      description,
    }
    console.log(service);
    axios.patch(`http://localhost:5000/provider/service/${_id}`, service)
    .then((result) => {
      console.log(result.data)
    })
    .catch((err) => console.log(err))
  };


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
          .delete(`http://localhost:5000/provider/services/${_id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              const remaining = services.filter(
                (Service) => Service._id !== _id
              );

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setServices(remaining);
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
  // console.log(services.length)

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Manage Services - Electro Fix</title>
      </Helmet>
      <Navbar></Navbar>
      <h2 className="text-center my-4 text-2xl">SERVICES THAT YOU PROVIDE</h2>
      {services.length < 1 ? (
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
              {services.map((service) => (
                <tr key={service._id} className="hover">
                  <td>{service.serviceName}</td>
                  <td>{service.providerName}</td>
                  <td>{service.price}</td>
                  <td>
                    <FaEdit
                      className="text-xl cursor-pointer"
                      onClick={() =>
                        handleEditIconClick(service)
                      }
                    />
                  </td>
                  <td>
                    <MdDeleteForever
                      onClick={() => handleDelete(service._id)}
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
          <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-5/6 m-4 shadow-2xl bg-base-100 ">
              <form
                className="card-body lg:grid lg:gap-6 grid-cols-2"
                onSubmit={(e) => {
                  // e.preventDefault();
                  handleUpdateService(editService._id, e.target)
                  }} 
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    defaultValue={editService?.imgURL}
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
                    defaultValue={editService?.serviceName}
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
                    defaultValue={editService?.price}
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
                    defaultValue={editService?.serviceArea}
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
                    defaultValue={editService?.description}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6 col-span-2">
                  <button className="btn btn-primary">Update Service</button>
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

import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const notify = (message) => toast(message);

  const { email, displayName } = user;
  // console.log(email, displayName)

  const {
    _id,
    imgURL,
    serviceName,
    Price,
    serviceArea,
    description,
    providerImage,
    providerName,
    providerEmail,
  } = service;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceTakingDate = form.elements.serviceTakingDate.value;
    const specialInstruction = form.elements.specialInstruction.value;
    const booking = {
      serviceTakingDate,
      specialInstruction,
      currentUserEmail: email,
      currentUserName: displayName,
      serviceId: _id,
      serviceImage: imgURL,
      serviceName,
      price: Price,
      providerName,
      providerEmail,
    };
    axios
      .post("http://localhost:5000/bookings", booking)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          notify("Booking successfull");
        }
      })
      .catch((error) => {
        console.error(error);
        notify(error.message);
      });
    // console.log(booking);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="my-8">
        <h3 className="text-center">Service Provider Information</h3>
        <div className="my-8">
          <div className="flex items-center justify-center gap-3">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src={providerImage} />
              </div>
            </div>
            <div>
              PremerPremer
              <h3 className="mb-3">Area: {serviceArea}</h3>
              <h3>Name: {providerName}</h3>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-6xl mx-auto">
          <figure>
            <img src={imgURL} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{serviceName}</h2>
            <p>{description}</p>
            <div className="my-4">
              <h4>Service Price: {Price}</h4>
            </div>
            <div className="card-actions flex justify-center">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <ToastContainer />
        <div className="modal-box ">
          <div className="hero bg-base-100">
            <div className="card shrink-0 w-full shadow-2xl bg-base-100 modal-action">
              <form
                method="dialog"
                onSubmit={handleBooking}
                className="card-body grid md:grid-cols-2"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ServiceId</span>
                  </label>
                  <input
                    type="text"
                    name="_id"
                    defaultValue={_id}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Service Name</span>
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    defaultValue={serviceName}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Image</span>
                  </label>
                  <input
                    type="text"
                    name="imgURL"
                    defaultValue={imgURL}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Provider Email</span>
                  </label>
                  <input
                    type="text"
                    name="providerEmail"
                    defaultValue={providerEmail}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Provider Name</span>
                  </label>
                  <input
                    type="text"
                    name="providerName"
                    defaultValue={providerName}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Current User Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue={email}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Current User Name</span>
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    defaultValue={displayName}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Taking Date</span>
                  </label>
                  <input
                    type="date"
                    name="serviceTakingDate"
                    placeholder="Service Taking Date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Special Instruction</span>
                  </label>
                  <input
                    type="text"
                    name="specialInstruction"
                    placeholder="Special Instruction"
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
                    name="Price"
                    placeholder={Price}
                    className="input input-bordered"
                    readOnly
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Book</button>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;

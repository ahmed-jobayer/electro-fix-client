import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const ServiceDetails = () => {
  const service = useLoaderData();
  // console.log(service)

  const {
    _id,
    imgURL,
    serviceName,
    Price,
    serviceArea,
    description,
    providerImage,
    providerName,
  } = service;

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
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <Footer></Footer>
    </div>
  );
}; 

export default ServiceDetails;

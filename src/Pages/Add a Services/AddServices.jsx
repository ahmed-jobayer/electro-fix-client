import axios from "axios";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const { displayName, email, photoURL } = user;

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.elements.imageUrl.value;
    const serviceName = form.elements.serviceName.value;
    const price = form.elements.price.value;
    const serviceArea = form.elements.serviceArea.value;
    const description = form.elements.description.value;
    const service = {
      imgURL: imageUrl,
      serviceName,
      price,
      serviceArea,
      description,
      providerEmail: email,
      providerImage: photoURL,
      providerName: displayName,
    };
    axios
      .post("http://localhost:5000/services", service)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          alert("Service dded Successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error.message); 
      });
    // console.log(service);
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Add Service - Electro Fix</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-5/6 m-4 shadow-2xl bg-base-100 ">
          <form
            onSubmit={handleAddService}
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
      <Footer></Footer>
    </div>
  );
};

export default AddServices;

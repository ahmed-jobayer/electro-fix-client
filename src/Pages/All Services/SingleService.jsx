import { Link } from "react-router-dom";

const SingleService = ({service}) => {

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-6xl mx-auto">
      <figure>
        <img
          src={service.imgURL}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.serviceName}</h2>
        <p>{service.description}</p>
        <div className="my-4">
          <h4 className="mb-2">City: {service.serviceArea}</h4>
          <h4>Price: ${service.price}</h4>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <h3 className="col-span-2 mb-2">Provider:</h3>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-14 rounded-xl">
                <img src={service.providerImage} alt={service.providerName}/>
              </div>
            </div>
            <h3>{service.providerName}</h3>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/serviceDetails/${service._id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

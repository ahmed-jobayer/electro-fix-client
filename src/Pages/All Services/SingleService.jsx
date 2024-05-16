import { Link } from "react-router-dom";

const SingleService = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-6xl mx-auto">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="my-4">
          <h4 className="mb-2">Service Area</h4>
          <h4>Service Price</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-14 rounded-xl">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h3>name</h3>
          </div>
          <div className="card-actions justify-end">
            <Link to="/serviceDetails">
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

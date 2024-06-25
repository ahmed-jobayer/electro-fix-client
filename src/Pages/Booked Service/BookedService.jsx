import { useContext, useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProviders";

const BookedService = () => {
  const [bookedServises, setBookedServices] = useState([]);
  console.log(bookedServises);
  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email;

  useEffect(() => {
    axios
      .get("https://electro-fix-server.vercel.app/bookedServices", {
        params: {
          currentUserEmail: currentUserEmail,
        },
      })
      .then((data) => {
        setBookedServices(data.data);
        // console.log(data.data)
      });
  }, [currentUserEmail]); 

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <h2 className="text-center my-4 text-2xl">Booked Services Information</h2>
      {bookedServises.length < 1 ? (
        <>
          <div className="min-h-screen flex items-center justify-center">
            <h3>You did not booked any services yet</h3>
          </div>
        </>
      ) : (
        <div className="overflow-x-auto min-h-screen">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service Image</th>
                <th>Service Name</th>
                <th>Service Provider Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {bookedServises.map((bookedServise) => (
                <tr key={bookedServise._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-28 ">
                        <img
                          src={bookedServise.serviceImage}
                          alt={bookedServise.serviceName}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{bookedServise.serviceName}</td>
                  <td>{bookedServise.providerName}</td>
                  <td>{bookedServise.price}</td>
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

export default BookedService;

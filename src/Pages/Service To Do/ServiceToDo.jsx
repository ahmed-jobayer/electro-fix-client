import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Select from "react-dropdown-select";
import Swal from "sweetalert2";

const ServiceToDo = () => {
  const [toDoServices, setToDoServices] = useState([])
  const { user } = useContext(AuthContext);
  const currentUserEmail = user.email;
  // console.log(currentUserEmail)
  useEffect(() => {
    axios.get("http://localhost:5000/providerEmail/services", {
      params: {
        currentUserEmail: currentUserEmail,
      },
    })
    .then(data => {
      setToDoServices(data.data)
    })
  }, [currentUserEmail]);

  const options = [
    {id:'Pending', name:'Pending'},
    {id:'Working', name:'Working'},
    {id:'Completed', name:'Completed'},
  ]
  
  // console.log(toDoServices)

  // handle status change 
  const handleStatusChange = (newStatus, serviceId) => {
    console.log(newStatus, serviceId)
    Swal.fire({
      title: `Do you want to change the status to ${newStatus}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/updateBookedService/${serviceId}`, {
          status: newStatus,
        })
        .then((response) => {
          console.log(response)
          Swal.fire("Updated!", "", "success");
        })
        .catch((err) => {
          console.log(err)
          Swal.fire("Error updating status", "", "error");
        })
       
      } else if (result.isDenied) {
        Swal.fire("Status not updated", "", "info");
      }
    });
    
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Service To Do - Electro Fix</title>
      </Helmet>
      <Navbar></Navbar>
      <h2 className="text-center my-4 text-2xl">SERVICES TO DO</h2>
      {toDoServices.length < 1 ? (
        <>
          <div className="min-h-screen flex items-center justify-center">
            <h3>You have no services to do yet</h3>
          </div>
        </>
      ) : (
        <div className="overflow-x-auto min-h-screen relative z-40 my-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>Service Name</th>
                <th>Consumer Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {toDoServices.map((toDoService) => (
                <tr key={toDoService._id} className="hover">
                  <td>{toDoService.serviceName}</td>
                  <td>{toDoService.currentUserName}</td>
                  <td>{toDoService.price}</td>
                  <td className="w-36">
                    <Select
                    placeholder={toDoService.status}
                    options={options}
                    labelField="name"
                    valueField="id"
                    onChange={(selected) =>
                      handleStatusChange(selected[0]?.id, toDoService._id)
                    }
                    ></Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;

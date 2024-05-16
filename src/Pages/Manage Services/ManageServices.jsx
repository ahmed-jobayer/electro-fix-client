import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



const ManageServices = () => {
  return (
    <div className="container mx-auto">
        <Navbar></Navbar>
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
            <tr className="hover">
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td><FaEdit className="text-xl cursor-pointer"/></td>
              <td><MdDeleteForever className="text-2xl cursor-pointer"/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageServices;

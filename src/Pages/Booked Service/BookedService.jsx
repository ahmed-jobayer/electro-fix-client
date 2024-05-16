import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const BookedService = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <h2 className="text-center my-4 text-2xl">Booked Services Information</h2>
      <div className="overflow-x-auto min-h-screen">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Service Name</th>
              <th>Service Provider Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-28 ">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookedService;

import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import SingleService from "./SingleService";


const AllServices = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="my-6">
                <h2 className="text-center my-6 text-3xl">All Services</h2>
            <SingleService></SingleService>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;
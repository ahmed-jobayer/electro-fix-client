import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";



const Home = () => {
    return (
        <div className="mx-auto container">
            <Navbar></Navbar>
            <div className="min-h-screen">
            this is home
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
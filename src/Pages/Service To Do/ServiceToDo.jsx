import { Link } from "react-router-dom";

const ServiceToDo = () => {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <h2>Working on this page</h2>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default ServiceToDo;
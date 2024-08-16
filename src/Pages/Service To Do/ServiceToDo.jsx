import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ServiceToDo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Helmet>
        <title>Service To Do - Electro Fix</title>
      </Helmet>
      <h2>Working on this page</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ServiceToDo;

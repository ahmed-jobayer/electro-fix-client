import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content">
      <aside>
       <img className="w-32" src="https://imgur.com/SNeicb6.png" alt="" />
        <p className="font-bold">
          <span className="text-2xl">Electro Fix Ltd.</span> <br />
          Providing reliable electric service since 1992
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-5 text-4xl">
        <Link><FaFacebook /></Link>
        <Link><FaLinkedin /></Link>
        
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

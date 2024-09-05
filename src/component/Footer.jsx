import { FaFacebook, FaGear, FaInstagram, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
          <footer className="footer footer-center bg-gradient-to-r from-slate-600 to-slate-800 text-primary-content p-10">
  <aside>
    <div className="text-6xl">
        <FaGear></FaGear>
    </div>
    <p className="font-bold text-3xl">
    Thoughtful Chronicles
      <br />
      Makes your career look its best
    </p>

    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4 text-xl">
      <a>
        <FaFacebook></FaFacebook>
      </a>
      <a>
       <FaTwitter></FaTwitter>
      </a>
      <a>
       <FaInstagram></FaInstagram>
      </a>
      
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
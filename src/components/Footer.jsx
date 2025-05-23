// import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaLinkedin ,FaYoutube, FaEnvelope, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white h-20 flex items-center">
      <div className="w-full max-w-screen-xl mx-auto flex justify-center items-center gap-10 px-4 sm:gap-20 sm:px-20">
        {/* Logo Section */}
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
        {/* Social Links Section */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/lensvaultstudios?igsh=YzR2bmJjN2ZhMzJ6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/lensvaultstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-400 transition duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href=" https://youtube.com/@lensvaultstudios?si=htcnLCrggOYtwvGj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-red-500 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:business@lensvaultstudios.com"
            className="text-white text-xl hover:text-green-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571546740050"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-600 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/lens-vault-studios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

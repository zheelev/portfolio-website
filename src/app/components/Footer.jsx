import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-400 hover:text-white" size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 hover:text-white" size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-white" size={28} />
          </a>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">&copy; 2025 Anatolii Zhelev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-10">
      <div className="container text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Muhammad Tahir Hasni. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="linkedin.com/in/muhammad-tahir-hasni-021a562ba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"data-aos="zoom-in-down"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition"data-aos="zoom-in-down"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="muhammadtahirhasni@gmail.com"
            className="text-white text-2xl hover:text-gray-300 transition"data-aos="zoom-in-down"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// const Footer = () => {
//     return (
//       <footer className="bg-accent text-white py-10">
//         <div className="container text-center">
//           <p className="text-lg">
//             &copy; {new Date().getFullYear()} Muhammad Tahir Hasni. All rights reserved.
//           </p>
//           <div className="mt-4">
//             <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
//               LinkedIn
//             </a>
//             <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
//               GitHub
//             </a>
//             <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
//               Twitter
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
  
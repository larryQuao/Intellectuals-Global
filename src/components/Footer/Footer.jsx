import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../assets/logoWhiteBg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-alto-950 font-Montserrat">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-8 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <span className="sr-only">Intellectuals Hompage</span>
              <img
                src={footerImg}
                alt="Intellectuals Logo"
                className="h-16 sm:h-20 w-auto bg-white p-2 rounded-md"
              />
            </Link>
          </div>

          <nav className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 md:gap-8">
            <Link
              to="/about"
              className="text-md leading-6 text-white hover:text-violet-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-md leading-6 text-white hover:text-violet-300 transition-colors"
            >
              Services
            </Link>
          </nav>

          <Link
              to="/privacy-policy"
              className="text-md leading-6 text-white hover:text-violet-300 transition-colors"
            >
              Privacy Policy
            </Link>
        </div>
        <div className="mt-4 md:mt-8 pt-8 border-t border-baltic-700 text-center">
          <p className="text-xs sm:text-sm leading-5 text-baltic-300">
            © {currentYear} Intellectuals Global. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

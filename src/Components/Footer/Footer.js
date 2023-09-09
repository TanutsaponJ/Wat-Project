import React, { useEffect } from "react";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Import Icons

import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container">
        <div className="content grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="row">
            <div className="spanText">CONTACT US</div>

            <div className="contactDiv">
              <div className="span flex">
                <HiPhone className="icon" />
                <span>+244 334 556 67</span>
              </div>
              <div className="span flex">
                <MdEmail className="icon" />
                <span>Asssdaad@Wonder.com</span>
              </div>
              <div className="span flex">
                <FaLocationArrow className="icon" />
                <span>+244 334 556 67</span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="row">
            <div className="spanText">POPULAR NEWS</div>

            <div className="singleNews">
              <span className="text">
                Your Personal Guide to the most places to visit in the world
              </span>
              <p>Jan 04, 2023</p>
            </div>

            <div className="singleNews">
              <span className="text">
                The grand reveal of the most iconic hotel in the world -
                Atlantis The Royal
              </span>
              <p>Jan 20, 2023</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="row">
            <div className="spanText">QUICK LINKS</div>
            <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottomDiv flex">
          <p>Copyright 2023 Tanutsapon Jinaongkan - All right reserved</p>

          <div className="socials flex">
            <FaFacebookF className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon" />
            <FaGithub className="icon" />
          </div>

          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

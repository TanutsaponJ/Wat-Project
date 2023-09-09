import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

import video from "../../assets/video2.mp4";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="discount section">
      <div className="secContainer">
        <video src={video} autoPlay muted loop></video>
        <div className="textDiv">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            Contact for more information
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500">
            สอบถามข้อมูลเพิ่มเติม
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="input_btn flex"
          >
            <input type="text" placeholder="Enter You E-mail" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

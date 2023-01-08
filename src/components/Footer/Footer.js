import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_desc">
          <h1>SCE</h1>
          <p>SAPTHAGIRI COLLEGE OF ENGINEERING BENGALURU</p>
          <p id="phone">080-28 372800</p>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">About SCE</h2>
          <a
            href="https://www.sapthagiri.edu.in/maestro/departmentfaculty?type=IT"
            target="blank"
            className="footer_link"
          >
            Faculty List of All Dept
          </a>
          <a
            href="https://www.sapthagiri.edu.in/ssr"
            target="blank"
            className="footer_link"
          >
            NAAC Details
          </a>
          <a
            href="https://www.sapthagiri.edu.in/explore_images/1/2/"
            target="blank"
            className="footer_link"
          >
            SANKALP
          </a>
          <a
            href="https://www.sapthagiri.edu.in/generalinformation"
            target="blank"
            className="footer_link"
          >
            Admission
          </a>
        </div>
      </div>
      <div id="footer" className="footer_wrapper">
        <div className="footer_links">
          <h2 className="footer_title">Placements</h2>
          <a
            href="https://www.sapthagiri.edu.in/placementcell"
            target="blank"
            className="footer_link"
          >
            Placements
          </a>
          <a
            href="https://www.sapthagiri.edu.in/companies"
            target="blank"
            className="footer_link"
          >
            COMPANIES
          </a>
        </div>
        <div className="footer_links">
          <h2 className="footer_title">Get in Touch</h2>
          <a
            href="https://www.sapthagiri.edu.in/home/"
            target="blank"
            className="footer_link"
          >
            SCE HOME
          </a>
          <a
            href="https://www.facebook.com/SCEBengaluru2001?modal=admin_todo_tour"
            target="blank"
            className="footer_link"
          >
            FACEBOOK
          </a>
          <a
            href="https://www.youtube.com/channel/UC7CQf-ButBsrY0L_5wNh43Q"
            target="blank"
            className="footer_link"
          >
            YOUTUBE
          </a>
          <a
            href="https://www.instagram.com/sce.bengaluru/"
            target="blank"
            className="footer_link"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

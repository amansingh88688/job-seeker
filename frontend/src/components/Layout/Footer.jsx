import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>Made by Aman Singh❤️</div>
      <div>
        <Link to={"https://www.linkedin.com/in/aman-singh-718493224/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/amansingh88688/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

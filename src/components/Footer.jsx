import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-secondary sticky-bottom  p-1 
                 fw-bolder d-flex text-white
                 justify-content-center"
    >
      <p className="mt-2">
        contact :
        <a
          href="https://rajagopalresume.netlify.app"
          className="text-decoration-none text-white"
          target="_blank"
        >
          {" "}
          &copy; RAJAGOPAL{" "}
        </a>
      </p>
    </div>
  );
};

export default Footer;

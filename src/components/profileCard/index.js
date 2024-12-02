

import "../../styles/product.css";
import React from "react";
import img from "../../../public/assets/img.svg";
export default function Profile(props) {

  const { name, title, age, location } = props;
  return (

    <div>

      <div className="profile-card">
        <div className="profile-img">
          <img src={img} alt="Profile" width={100}
          />
        </div>
        <h2>{name}</h2>
        <p className="title">{age}</p>  
          <p className="title">{title}</p>
        <p>{location}</p>
        <p>Building innovative web solutions.</p>
        <div className="social-links">
          <a href="#linkedin" className="btn">
            LinkedIn
          </a>
          <a href="#github" className="btn">
            GitHub
          </a>
        </div>
      </div>

    </div>
  );


}
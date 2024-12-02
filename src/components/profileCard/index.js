

import "../../styles/profile.css";
import React from "react";

export default function Profile(props) {

  const { name, title, age, location } = props;
  return (

    <div>

      <div className="profile-card">
        <div className="profile-img">
          <img src="/public/assets/profile.png" alt="Profile" width={100}
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
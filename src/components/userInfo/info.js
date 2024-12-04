import React from "react";
import "../../styles/info.css";

function Info({ user }) {
  return (
    <div className="user-info card">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="profile-picture"
      />
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <span className={`role-badge ${user.role.toLowerCase()}`}> */}
        <span className="role-badge">
          {user.role}
        </span>
      </div>
    </div>
  );
}

export default Info;

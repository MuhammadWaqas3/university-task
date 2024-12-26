import React from "react";
import { useParams } from "react-router-dom";
import "../styles/userProfile.css";

export default function UserProfile() {
  const { username } = useParams();


  const userData = {
    john_doe: {
      name: "John Doe",
      email: "john@example.com",
      bio: "Loves hiking and outdoor adventures.",
      avatar: "https://via.placeholder.com/100?text=JD",
    },
    jane_smith: {
      name: "Jane Smith",
      email: "jane@example.com",
      bio: "Avid reader and coffee enthusiast.",
      avatar: "https://via.placeholder.com/100?text=JS",
    },
    sam_lee: {
      name: "Sam Lee",
      email: "sam@example.com",
      bio: "Tech geek and music lover.",
      avatar: "https://via.placeholder.com/100?text=SL",
    },
  };

  const user = userData[username.toLowerCase()];

  if (!user) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>User not found</h2>;
  }

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <h1>Welcome, {user.name}!</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p className="user-bio">{user.bio}</p>
      <a href={`mailto:${user.email}`} className="action-btn">
        Contact {user.name}
      </a>
    </div>
  );
}

import React from "react";
import "../../styles/stats.css";

function Statistics({ stats }) {
  return (
    <div className="statistics card">
      <h2>Statistics</h2>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Active Users: {stats.activeUsers}</p>
      <p>New Signups: {stats.newSignups}</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${stats.activePercentage}%` }}
        ></div>
      </div>
      <p>{stats.activePercentage.toFixed(2)}% Active Users</p>
    </div>
  );
}

export default Statistics;

"use client";
import React from "react";
import "../Styles/NotificationStyles.css";
import GroupCard from "./GroupCard";
const Notifications = () => {
  return (
    <div className="notifications-panel">
      <div className="notification-feedback">
        <div className="notifications">
          <div className="text-and-count">
            <h3>Notifications</h3>
            <span className="inbox-counter">3</span>
          </div>
        </div>
        <div className="read-all">
          <p>Mark all as read</p>
        </div>
      </div>
      <GroupCard />
      <GroupCard />
    </div>
  );
};

export default Notifications;

"use client";
import React, { useState } from "react";
import "../Styles/NotificationStyles.css";
import GroupCard from "./GroupCard";
const Notifications = () => {
  const [allReadStatus, setAllReadStatus] = useState<boolean>(false);

  const markAllRead = () => {
    setAllReadStatus(true);
  };
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
          <p onClick={markAllRead}>Mark all as read</p>
        </div>
      </div>
      <div className="card-container">
        <GroupCard allReadStatus={allReadStatus} />
        <GroupCard allReadStatus={allReadStatus} />
      </div>
    </div>
  );
};

export default Notifications;

"use client";
import React, { useState } from "react";
import "../Styles/NotificationStyles.css";
import GroupCard from "./GroupCard";
import { Alert } from "../Types/types";

const Notifications = () => {
  const [allReadStatus, setAllReadStatus] = useState<boolean>(false);
  const privateMessage =
    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.";
  const alerts: Alert[] = [
    {
      allReadStatus: allReadStatus,
      username: "Jacob Thompson",
      img: "img",
      description: "has joined your group",
      timestamp: "1 day ago",
    },
    {
      allReadStatus: allReadStatus,
      username: "Rizky Hasanuddin",
      img: "img",
      description: "sent you a private message",
      timestamp: "5 days ago",
      message: privateMessage,
    },
    {
      allReadStatus: allReadStatus,
      username: "Kimberly Smith",
      img: "img",
      description: "commented on your picture",
      timestamp: "1 week ago",
      // add picture type for conditional picture render
    },
    {
      allReadStatus: allReadStatus,
      username: "Nathan Peterson",
      img: "img",
      description:
        "reacted to your recent post 5 end-game strategies to increase your win rate",
      timestamp: "2 weeks ago",
    },
    {
      allReadStatus: false,
      username: "Anna Kim",
      img: "img",
      description: "left the group",
      group: "Chess Club",
      timestamp: "2 weeks ago",
    },
  ];

  const userJacob: Alert = {
    allReadStatus: allReadStatus,
    username: "Jacob Thompson",
    img: "img",
    description: "has joined your group",
    group: "Chess Club",
    timestamp: "2 weeks ago",
  };

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
        <GroupCard {...userJacob} />
        {/* <GroupCard
          allReadStatus={allReadStatus}
          privateMessage={privateMessage}
        />
        <GroupCard allReadStatus={allReadStatus} /> */}
        {/* <GroupCard {...userJacob} /> */}
      </div>
    </div>
  );
};

export default Notifications;

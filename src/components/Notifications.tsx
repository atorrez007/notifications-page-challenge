"use client";
import React, { useState } from "react";
import "../Styles/NotificationStyles.css";
import GroupCard from "./GroupCard";
import { Alert } from "../Types/types";
import {
  Jacob,
  Anna,
  Rizky,
  Kimberly,
  Nathan,
  Angela,
  Mark,
  Chess,
} from "../imageImports";

const Notifications = () => {
  const [allReadStatus, setAllReadStatus] = useState<boolean>(false);
  const privateMessage =
    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.";
  const alerts: Alert[] = [
    {
      id: 5,
      allReadStatus: allReadStatus,
      username: "Jacob Thompson",
      img: Jacob,
      description: "has joined your group",
      timestamp: "1 day ago",
      group: "Chess Club",
    },
    {
      id: 4,
      allReadStatus: allReadStatus,
      username: "Rizky Hasanuddin",
      img: Rizky,
      description: "sent you a private message",
      timestamp: "5 days ago",
      message: privateMessage,
    },
    {
      id: 3,
      allReadStatus: allReadStatus,
      username: "Kimberly Smith",
      img: Kimberly,
      description: "commented on your picture",
      timestamp: "1 week ago",
      picture: Chess,
    },
    {
      id: 2,
      allReadStatus: allReadStatus,
      username: "Nathan Peterson",
      img: Nathan,
      description:
        "reacted to your recent post 5 end-game strategies to increase your win rate",
      timestamp: "2 weeks ago",
    },
    {
      id: 1,
      allReadStatus: allReadStatus,
      username: "Anna Kim",
      img: Anna,
      description: "left the group",
      group: "Chess Club",
      timestamp: "2 weeks ago",
    },
    {
      id: 6,
      allReadStatus: allReadStatus,
      username: "Angela Gray",
      img: Angela,
      description: "followed you",
      timestamp: "5m ago",
    },
    {
      id: 7,
      allReadStatus: allReadStatus,
      username: "Mark Webber",
      img: Mark,
      description: "reacted to your recent post",
      timestamp: "1m ago",
      post: "My first tournament today!",
    },
  ];

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
        {alerts
          .sort((a, b) => b.id - a.id)
          .map((obj) => (
            <GroupCard key={obj.id} {...obj} />
          ))}
      </div>
    </div>
  );
};

export default Notifications;

import React from "react";
import "../Styles/GroupCardStyles.css";
import AnnaKim from "../assets/images/avatar-anna-kim.webp";
import Image from "next/image";

const GroupCard = () => {
  return (
    <div className="group-card-panel-unread">
      <div className="user-details">
        <div className="avatar">
          <Image src={AnnaKim} alt="user-avatar" width={50} height={50} />
        </div>
      </div>
      <div className="user-info">
        <p>
          <span className="username">Anna Kim</span> Left the group Chess Club
          <div className="time-stamp-placeholder">
            <span className="timestamp">2 Weeks Ago</span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default GroupCard;

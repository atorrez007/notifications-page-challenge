import React, { useEffect, useState } from "react";
import "../Styles/GroupCardStyles.css";
import AnnaKim from "../assets/images/avatar-anna-kim.webp";
import Image from "next/image";

type GroupCardProps = {
  allReadStatus: boolean;
};

const GroupCard = ({ allReadStatus }: GroupCardProps) => {
  const [isRead, setIsRead] = useState<boolean>(false);

  const readOrUnread = isRead ? "read" : "unread";

  const markAsRead = () => {
    setIsRead(true);
  };

  // useEffect will set isRead to true for all messages and override the option to markAsRead().
  useEffect(() => {
    allReadStatus ? setIsRead(true) : null;
  }, [allReadStatus]);
  return (
    <div className={`group-card-panel-${readOrUnread}`} onClick={markAsRead}>
      <div className="user-details">
        <div className="avatar">
          <Image src={AnnaKim} alt="user-avatar" width={50} height={50} />
        </div>
      </div>
      <div className="user-info">
        <div>
          <span className="username">Nathan Peterson</span> reacted to your
          recent post 5 end-gamge strategies to increase your win rate.
          <div className="time-stamp-placeholder">
            <span className="timestamp">2 Weeks Ago</span>
            <span className="testBranch">testBranch Deploy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;

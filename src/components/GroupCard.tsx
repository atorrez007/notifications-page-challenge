import React, { useEffect, useState } from "react";
import "../Styles/GroupCardStyles.css";
import AnnaKim from "../assets/images/avatar-anna-kim.webp";
import Image from "next/image";
import { Alert } from "@/Types/types";

// export type Alert = {
//   allReadStatus: boolean;
//   username: string;
//   img: string;
//   description: string;
//   timestamp: string;
//   message?: string;
//   group?: string;
// };

type GroupCardProps = {
  // allReadStatus: boolean;
  // privateMessage?: string;
};

const GroupCard = ({
  allReadStatus,
  username,
  img,
  description,
  message,
  group,
  timestamp,
  post,
}: Alert) => {
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
          <Image src={img} alt="user-avatar" width={50} height={50} />
        </div>
      </div>
      <div className="user-info">
        <div>
          <span className="username">{username}</span>
          {description}
          {post ? <span className="post-styles"> {post}</span> : null}
          <span className="group-styles"> {group}</span>
          {!isRead ? <span className="red-dot" /> : null}
          <div className="time-stamp-placeholder">
            <span className="timestamp">{timestamp}</span>
          </div>
          {message ? (
            <div className="private-message-container">{message}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GroupCard;

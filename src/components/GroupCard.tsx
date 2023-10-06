import React, { useEffect, useState } from "react";
import "../Styles/GroupCardStyles.css";
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

const GroupCard = ({
  allReadStatus,
  username,
  img,
  description,
  message,
  group,
  timestamp,
  post,
  picture,
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
          <span className="description-styles">{description} </span>
          {post ? <span className="post-styles"> {post}</span> : null}
          {group ? <span className="group-styles">{group}</span> : null}
          {!isRead ? <span className="red-dot" /> : null}
          <div className="time-stamp-placeholder">
            <span className="timestamp">{timestamp}</span>
          </div>
          {message ? (
            <div className="private-message-container">{message}</div>
          ) : null}
        </div>
      </div>
      {picture ? (
        <Image
          src={picture}
          className="picture-styles"
          alt="referencePicture"
          width={50}
          height={50}
        ></Image>
      ) : null}
    </div>
  );
};

export default GroupCard;

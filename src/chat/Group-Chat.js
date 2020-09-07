import React from "react";
import "./Group-Chat.scss";
import { groupData } from "../data";
import { chatData } from "../data";
import { Chats } from "./Chat-container";

export const ChatShell = ({ type }) => {
  return (
    <>
      <GroupHeader type={type} />
      <div className="chat-container" id="section">
        {type === "private"
          ? groupData.map((data, key) => {
              return (
                <div key={key}>
                  <Chats
                    key={key}
                    name={data.name}
                    avatar={data.avatar}
                    time={data.time}
                    status={data.status}
                    message={data.message}
                    phone={data.phone}
                    notification={data.notification}
                    menu={data.menu}
                    type="private"
                  />
                </div>
              );
            })
          : chatData.map((data, key) => {
              return (
                <div key={key}>
                  <Chats
                    key={key}
                    id={data.id}
                    name={data.name}
                    avatar={data.avatar}
                    time={data.time}
                    status={data.status}
                    message={data.message}
                    phone={data.phone}
                    notification={data.notification}
                    menu={data.menu}
                  />
                </div>
              );
            })}
      </div>
    </>
  );
};

const GroupHeader = ({ type }) => {
  return (
    <div className="section-title">
      <span>{type === "private" ? "Private Groups" : "Direct Messages"}</span>
      <div className="plus-icon">
        <img src={require("../images/icons/plus.png")} alt="" />
      </div>
    </div>
  );
};

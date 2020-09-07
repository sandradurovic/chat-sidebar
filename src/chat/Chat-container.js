import React, { useState } from "react";
import "./Group-Chat.scss";

export const Chats = ({
  name,
  avatar,
  time,
  status,
  message,
  phone,
  notification,
  menu,
}) => {
  const toggleClass = (e) => {
    const previousActive = document.querySelector(".section-chat.active");
    if (previousActive) previousActive.classList.remove("active");
    e.currentTarget.classList.add("active");
  };
  if (!menu)
    return (
      <div className={`section-chat`} onClick={toggleClass}>
        <div className="chat">
          <div className="chat-left">
            <div className="chat-photo">
              <img src={avatar} alt="" />
            </div>
            <div className="chat-middle">
              <div className="chat-middle-top">
                <img src={status} alt="" />
                <span className="group-name">{name}</span>
                <div className="chat-middle-bottom">{message}</div>
              </div>
            </div>
          </div>
          <div className="chat-right">
            <div className="chat-time">{time}</div>
            <div className="right-chat-icons">
              <div className="phone">
                <img src={phone} alt="" />
              </div>
              <div className="icon">
                <img src={notification} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else if (!notification)
    return (
      <div className={`section-chat`} onClick={toggleClass}>
        <div className="chat">
          <div className="chat-left">
            <div className="chat-photo">
              <img src={avatar} alt="" />
            </div>
            <div className="chat-middle">
              <div className="chat-middle-top">
                <img src={status} alt="" />
                <span className="group-name">{name}</span>
                <div className="chat-middle-bottom">{message}</div>
              </div>
            </div>
          </div>
          <div className="chat-right">
            <div className="chat-time">{time}</div>
            <div className="right-chat-icons">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="icon">
                <img src={menu} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else if (!notification && !menu)
    return (
      <div className={`section-chat`} onClick={toggleClass}>
        <div className="chat">
          <div className="chat-left">
            <div className="chat-photo">
              <img src={avatar} alt="" />
            </div>
            <div className="chat-middle">
              <div className="chat-middle-top">
                <img src={status} alt="" />
                <span className="group-name">{name}</span>
                <div className="chat-middle-bottom">{message}</div>
              </div>
            </div>
          </div>
          <div className="chat-right">
            <div className="chat-time">{time}</div>
            <div className="right-chat-icons">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className={`section-chat`} onClick={toggleClass}>
        <div className="chat">
          <div className="chat-left">
            <div className="chat-photo">
              <img src={avatar} alt="" />
            </div>
            <div className="chat-middle">
              <div className="chat-middle-top">
                <img src={status} alt="" />
                <span className="group-name">{name}</span>
                <div className="chat-middle-bottom">{message}</div>
              </div>
            </div>
          </div>
          <div className="chat-right">
            <div className="chat-time">{time}</div>
            <div className="right-chat-icons">
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="icon">
                <img src={notification} alt="" />
              </div>
              <div className="icon">
                <img src={menu} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

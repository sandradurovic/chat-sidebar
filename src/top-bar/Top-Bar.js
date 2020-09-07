import React from "react";
import "./Top-Bar.scss";
import { userData } from "../data";

export const TopBar = () => {
  return (
    <>
      <div id="top-bar-section">
        <div className="top-bar">
          {userData.map((data, key) => {
            return (
              <div key={key}>
                <UserSection
                  key={key}
                  avatar={data.avatar}
                  status={data.status}
                />
              </div>
            );
          })}
          <div className="right-section">
            <div className="top-bar-icons">
              <img src={require("../images/icons/home.png")} alt="" />
            </div>
            <div className="top-bar-icons">
              <img src={require("../images/icons/search.png")} alt="" />
            </div>
            <div className="top-bar-icons">
              <img src={require("../images/icons/Union.png")} alt="" />
            </div>
            <div className="top-bar-icons">
              <img src={require("../images/icons/sort.png")} alt="" />
            </div>
            <div className="top-bar-icons">
              <img src={require("../images/icons/new-chat.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const UserSection = ({ avatar, status }) => {
  return (
    <div className="profile-photo">
      <img src={avatar} alt="" />
      <img className="status-icon" src={status} alt="" />
    </div>
  );
};

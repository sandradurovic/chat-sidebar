import React from "react";
import "./Wrap.scss";
import { TopBar } from "../../top-bar/Top-Bar";
import { ChatsShell, ChatShell } from "../../chat/Group-Chat";

function SidebarWrap() {
  return (
    <div id="chat-container">
      <TopBar />
      <ChatShell type="private" />
      <ChatShell type="direct" />
    </div>
  );
}
export default SidebarWrap;

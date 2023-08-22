import React from "react";
import "./topbar.css";
import { MdCircleNotifications } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <MdCircleNotifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <AiFillSetting />
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="topAvatar"
          ></img>
        </div>
      </div>
    </div>
  );
}

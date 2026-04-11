import React from "react";
import "../assets/css/Announcement.css";

function Announcement() {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-inner">
          
          <span className="announcement-text">
            <strong>Now Accepting New Members</strong> in Leesburg & Surrounding Areas
          </span>

          <span className="announcement-divider">•</span>

          <span className="announcement-subtext">
            Limited availability for new families
          </span>

        </div>
      </div>
    </div>
  );
}

export default Announcement;
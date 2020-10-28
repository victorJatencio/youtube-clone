import React from 'react';
import "./SidebarRow.css";

function SidebarRow({ title, Icon }) {
  return (
    <div className="sidebarRow">
      {Icon}
      <h2>{title}</h2>
    </div>
  )
}

export default SidebarRow

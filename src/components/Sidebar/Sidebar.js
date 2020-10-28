import React from 'react';
import SidebarRow from "../SidebarRow/SidebarRow";
import HomeIcon from '@material-ui/icons/Home';

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sideBar">
      <SidebarRow Icon={<HomeIcon/>} title="Home"/>
      <SidebarRow title="Trending"/>
      <SidebarRow title="Subscription"/>
      <hr/>
      <SidebarRow title="Library"/>
      <SidebarRow title="History"/>
      <SidebarRow title="Your videos"/>
      <SidebarRow title="Your movies"/>
      <SidebarRow title="Watch later"/>
    </div>
  )
}

export default Sidebar

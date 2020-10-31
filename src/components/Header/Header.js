import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar/Avatar";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon/>
        <img 
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
      </div>
      
      <div className="header__input">
        <input type="text" placeholder="Search"/>
        <SearchIcon className="header__inputButton"/>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar
          alt="Victor Atencio"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-Kxgm27oH6nayScz_R2ZrhST5g8GEYcpyJB6U4=s192-c-mo"
        />
      </div>
    </div>
  )
}

export default Header

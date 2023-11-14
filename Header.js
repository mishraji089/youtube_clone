import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className='header'>
        <div className="header_left">

        <MenuIcon className='header_menuIcon'/>

        <img
        className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
        </div>
        <div className="header_input">
        <input  placeholder="Search" type="text" />
        <SearchIcon className='header_inputButton'/>

        </div>

        <div className="header_icon">

        <VideoCallIcon  className='header_icons'/>
        <AppsIcon className='header_icons'/>
        <NotificationsIcon className='header_icons'/>
        <Avatar     
        alt="Remy Sharp"
        src='https://media.licdn.com/dms/image/D4D03AQH_JGIy-PMG0g/profile-displayphoto-shrink_400_400/0/1682621909444?e=1694649600&v=beta&t=3HlIw5cOC8n4BYADUWBOo1qOV-dt9ubPD4LPwQxWeZI'/>

        </div>

    </div>
  )
}

export default Header
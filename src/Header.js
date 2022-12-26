import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img 
                src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
                alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption 
                avatar="https://scontent-den4-1.cdninstagram.com/v/t51.2885-19/64782842_420324095239495_3296236805241700352_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=107&_nc_ohc=6saCtv4OB9IAX9F-Uv5&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAunzsfeXmK8GokFiewEBRdFu84DWI9uXg_knPc8njh9A&oe=63AE6E00&_nc_sid=6136e7" 
                title="Me" 
            />


        </div>

    </div>
  );
}

export default Header
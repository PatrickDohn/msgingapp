import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Avatar ,IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from '../SidebarChat/SidebarChat';



const Sidebar = () => {
    return (
       <div className='sidebar'>
           <div className="sidebar_header">
            <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
           </div>
           <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
               </div>
           </div>
           <div className="sidebar__chats">
                <SidebarChat />
           </div>
       </div>
    )
}

export default Sidebar

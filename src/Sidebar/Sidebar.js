import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Avatar ,IconButton } from '@material-ui/core';



const Sidebar = () => {
    return (
       <div className='sidebar'>
           <div className="sidebar_header">


                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>

                </div>
           </div>
       </div>
    )
}

export default Sidebar

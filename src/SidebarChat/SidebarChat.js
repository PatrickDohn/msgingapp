import React from 'react'
import './sidebarchat.css'
import { Avatar ,IconButton } from '@material-ui/core';

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>

            </div>
        </div>
    )
}

export default SidebarChat

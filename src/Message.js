import { Avatar } from '@material-ui/core'
import React from 'react'
import { selectUser } from './features/userSlice'
import './Message.css'
import { useSelector } from 'react-redux'
import { forwardRef } from 'react'

// forwardRef() allows functional components to communicate for animation correctly

const Message = forwardRef(({ id, contents: {
    timestamp, displayName, email, message, photo, uid
} }, ref) => {
    const user = useSelector(selectUser)

    return (
        <div
            ref={ref}
            className={`message ${user.email === email && 'message__sender'}`}
        >
            <Avatar className="message__photo" src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
})

export default Message

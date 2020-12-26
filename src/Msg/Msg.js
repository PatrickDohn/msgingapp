import React, { useState } from 'react'
import './msg.css'
import axios from 'axios'
import Timer from '../Timer'


const Msg = ({ messages }) => {
    const [input, setInput] = useState("")
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
      };

    const sendMessage = async (e) => {
        e.preventDefault()


        await axios.post('http://localhost:9000/messages/new', {
            message: input,
            name: "demo",
            timestamp: "just now",
            received: false
    })

    setInput('')

}
    return (
        <div className="msg">
            <Timer />
            <div className="chat__body">
                {messages.map((message) => (
                <p className={`chat__message ${message.received && "chat__reciever"}`}>
                    {message.message}
                </p>
                ))}
            </div>
            <div className="chat__footer">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Tell her how you feel" type="text" />
                    <button onClick={sendMessage} type="submit"> Send</button>
                </form>
            </div>
        </div>
    )
}

export default Msg

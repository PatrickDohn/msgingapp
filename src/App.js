import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Msg from './Msg/Msg'
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/messages/sync')
    .then((res) => {
      setMessages(res.data)
    })
  }, [])
console.log(messages)
  useEffect(() => {
    let pusher = new Pusher('0403401385d676f588cb', {
      cluster: 'us2'
    });

    let channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unsubscribe()
      channel.unbind_all()
    }
  }, [messages])



  return (
    <div className="app">
      <div className='app_body'>

        <Msg messages={messages}/>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Msg from './Msg/Msg'
import Pusher from 'pusher-js'

function App() {

  useEffect(() => {
    let pusher = new Pusher('0403401385d676f588cb', {
      cluster: 'us2'
    });

    let channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, [])


  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar />
        <Msg />
      </div>
    </div>
  );
}

export default App;

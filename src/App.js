import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Msg from './Msg/Msg'

function App() {
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

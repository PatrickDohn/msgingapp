import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Msg from './Msg/Msg'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Msg />
    </div>
  );
}

export default App;

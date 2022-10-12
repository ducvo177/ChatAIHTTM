import { Routes, Route } from "react-router-dom";
import React from 'react';
import Chat from "./components/Chat/Chat";

import Guest from "./components/Guest/Guest";
import Controller from "./components/Controller/Controller";
import UserChat from "./components/UserChat/UserChat";
const ChatContext = React.createContext();
function App() {

  return (
    <ChatContext.Provider value={{ color: 'red' }}>
    <div>
      <Routes>
        <Route path="/" element={<Guest/>} />
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/controller" element={<Controller/>}/>
        <Route path="/user" element={<UserChat/>}/>
      </Routes>
    </div>
      </ChatContext.Provider>
  );
}

export default App;
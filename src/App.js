import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Room from "./pages/room/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/room/:roomId" element = {<Room/>}/>
    </Routes>
  );
}

export default App;

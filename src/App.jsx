import "./App.css";
import Home from "./pages/Home";
import SideMenu from "./components/SideMenu/SideMenu";
import { useState } from "react";

function App() {
  const [isClose, setIsClose] =  useState(false)
  return (
    <div style={{ display: "flex", width:'100%' }}>
      <SideMenu />
      <Home />
    </div>
  );
}

export default App;

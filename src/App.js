import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecVideos from "./components/RecommendedVideos/RecVideos";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__page">
        <Sidebar/>
        <RecVideos/>
      </div>
      
    </div>
  );
}

export default App;

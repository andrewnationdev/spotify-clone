import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/Home.page';
import SidebarComponent from './components/Sidebar.component';
import PlayerComponent from './components/Player/Player.component';

function App() {
  return (
    <div className="App">
      <div className="main-flex">
        <SidebarComponent/>
        <HomeScreen/>
      </div>
      <PlayerComponent/>
    </div>
  );
}

export default App;

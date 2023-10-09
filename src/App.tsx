import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/Home.page';
import SidebarComponent from './components/Sidebar.component';

function App() {
  return (
    <div className="App">
      <SidebarComponent/>
      <HomeScreen/>
    </div>
  );
}

export default App;

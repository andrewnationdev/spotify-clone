import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/Home.page';
import SidebarComponent from './components/Sidebar.component';
import PlayerComponent from './components/Player/Player.component';
import fetchAPIData from './modules/fetch';
import { IAPIResponse } from './types/API';
import { useQuery } from 'react-query';

function App() {
  const fetchData = async () => {
    const data = await fetchAPIData("ght123");

    context.updateData(data);
  }

  const { data, isLoading, isError, refetch } = useQuery('global-query', fetchData);

  return (
    <div className="App">
      {!isLoading && <>
        <div className="main-flex">
          <SidebarComponent />
          <HomeScreen />
        </div>
        <PlayerComponent />
      </>}
    </div>
  );
}

export default App;

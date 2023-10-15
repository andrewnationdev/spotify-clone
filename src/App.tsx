import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/Home.page';
import SidebarComponent from './components/Sidebar.component';
import PlayerComponent from './components/Player/Player.component';
import fetchAPIData from './modules/fetch';
import { IAPIResponse } from './types/API';
import { useQuery } from 'react-query';
import useSpotifyStore from './modules/store';

function App() {
  const [apiResult, setApiResult] = useState<IAPIResponse>({
    name: '',
    avatar: '',
    playlists: [],
    currentlyPlaying: {
      title: '',
      singer: '',
      cover: '',
      isFavorite: false,
    },
    sections: []
  });

  const fetchData = async () => {
    const res = await fetchAPIData("ght123");

    setApiResult(res);
  }

  const { data, isLoading, isError, refetch } = useQuery('global-query', fetchData);
  const store = useSpotifyStore();

  useEffect(() => {
    store.updateData((s) => ({
      ...s,
      data: {
        ...s.data,
        apiResult
      }
    }))

    console.log(data, store.state)
  }, [apiResult])

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

import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/Home.page';
import SidebarComponent from './components/Sidebar.component';
import PlayerComponent from './components/Player/Player.component';
import { QueryClient, QueryClientProvider } from 'react-query';
import fetchAPIData from './modules/fetch';
import {IAPIResponse} from './types/API';
import {SpotifyContext} from './context/context';

function App() {
  const queryClient = new QueryClient();

  const context = useContext(SpotifyContext);

  const fetchData = (): IAPIResponse => {
      const data: IAPIResponse = fetchAPIData("ght123");

      context.updateData(data);
  }

  const { data, isLoading, isError, refetch } = useQuery('global-query', fetchData);

  return (
    <SpotifyContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <div className="main-flex">
            <SidebarComponent/>
            <HomeScreen/>
          </div>
          <PlayerComponent/>
        </div>
      </QueryClientProvider>
    </SpotifyContextProvider>
  );
}

export default App;

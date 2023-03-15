import React from 'react';
import './App.css';
import SearchHeader from './pages/SearchHeader';
import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <Outlet />
      </YoutubeApiProvider>
    </>
  );
}

export default App;

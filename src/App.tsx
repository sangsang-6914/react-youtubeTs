import React from 'react';
import './App.css';
import SearchHeader from './pages/SearchHeader';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;

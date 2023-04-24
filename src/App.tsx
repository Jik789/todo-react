import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

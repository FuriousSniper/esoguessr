import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import GuessPage from './pages/GuessPage/GuessPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/guess/:name" element={<GuessPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

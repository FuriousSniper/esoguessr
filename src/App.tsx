import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import GuessPage from './pages/GuessPage/GuessPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/guess/:name" element={<GuessPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

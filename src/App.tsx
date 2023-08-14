import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import GuessPage from './pages/GuessPage/GuessPage';
import NotFoundPage from './pages/NotFoundPage';
import ScoresPage from './pages/ScoresPage';
import { checkScoresExistence, initScores } from './utils/utils';

function App() {
  useEffect(()=>{
    if(checkScoresExistence()){
      initScores()
    }
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/guess/:name" element={<GuessPage/>}/>
        <Route path="/scores" element={<ScoresPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

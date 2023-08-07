import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'

export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider value={{}}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
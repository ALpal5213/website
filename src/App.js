import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'

export const AppContext = createContext();

function App() {
  const [selectedView, setSelectedView] = useState('none');

  return (
    <AppContext.Provider value={{
      selectedView, setSelectedView
    }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
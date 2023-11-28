import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home.js'
import Page404 from './pages/Page404.js'

export const AppContext = createContext();

function App() {
  const [selectedView, setSelectedView] = useState('none');
  const [selectedItem, setSelectedItem] = useState('none');

  return (
    <AppContext.Provider value={{
      selectedView, setSelectedView,
      selectedItem, setSelectedItem
    }}>
      <HashRouter >
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/*" exact element={<Page404/>}/>
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
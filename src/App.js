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
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Page404/>}/>
        </Routes>
      </HashRouter>
      {/* </Router> */}
    </AppContext.Provider>
  );
}

export default App;
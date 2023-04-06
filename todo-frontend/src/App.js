import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './components/auth';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      
        {/* routes used in app..  */}
        <Routes>

          <Route exact path='/' element={ <Auth /> } />
          <Route path='/home' element={ <Home/> } />

        </Routes>
      
      </BrowserRouter>
  );
}

export default App;


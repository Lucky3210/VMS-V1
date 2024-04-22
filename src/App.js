import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Attendant_login from './pages/Attendant_login';
import Generic_dashboard from './pages/Generic_dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Attendant_login />} />
          <Route path="/" element={<Generic_dashboard />} exact/>

        </Routes>
      </BrowserRouter>
    </div>
    
  ); 
}

export default App;

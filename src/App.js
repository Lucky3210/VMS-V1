import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Attendant_login from './pages/Attendant_login';
import Generic_dashboard from './pages/Generic_dashboard';

function App() {
  return (
    <div className="App">

      <Attendant_login />
      {/* <BrowserRouter>
        <Routes>
          <Route element={Generic_dashboard} path='/Home'/>
          <Route element={Attendant_login} path='/login' />
        </Routes>
      </BrowserRouter> */}
      
    </div>
  ); 
}

export default App;

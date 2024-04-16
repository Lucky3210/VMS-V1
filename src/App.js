import './App.css';
import Header from './components/Header';
import Attendant_login from './pages/Attendant_login';
import Generic_dashboard from './pages/Generic_dashboard';
import PopupForm from './pages/PopupForm';

function App() {
  return (
    <div className="App">
      <Attendant_login />
      {/* <Generic_dashboard /> */}
    </div>
  );
}

export default App;

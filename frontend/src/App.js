import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path = "*" element={<Navigate to = "/login" />} />
         <Route path = "/cancelseats" element={<BookingCancellation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

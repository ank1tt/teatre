import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import './App.css';

import Register from './components/Register';
import UserLogIn from './components/UserLogIn';
import AdminHome from './components/AdminHome';
import PublishMovie from './components/PublishMovie';
import GenerateRevenue from './components/GenerateRevenue';
import PublishShow from './components/PublishShow';

function App() {
   return (
    <Router>
      <div className="App">
       <Routes>
         <Route path="/login" element={<UserLogIn />} />
         <Route path="/register" element={<Register />} />
         <Route path='/admin' element={<AdminHome />} />
         <Route path='/publish-show' element={<PublishMovie />} />
         <Route path="/publish-show/:movieId" element={<PublishShow />} />
         <Route path="/generate-revenue" element={<GenerateRevenue />} />   
         <Route path="*" element={<Navigate to="/login" />} />
       </Routes>
     </div>
    </Router>
   );
}

export default App;

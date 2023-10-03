import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import DashBoard from './Pages/DashBoard';
import TalkToExperts from './Pages/TalkToExperts';
import Exams from './Pages/Exams';
import Statistics from './Pages/Stats';
import History from './Pages/History';

function App() {
  return (
    <div className='h-screen'>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/talk-to-expert' element={<TalkToExperts/>}/>
      <Route path='/exam' element={<Exams/>}/>
      <Route path="/stats/:examId" element={<Statistics/>}/>
      <Route path="/history" element={<History/>}/>
    </Routes> 
    </div>
  );
}

export default App;

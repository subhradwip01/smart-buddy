import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
function App() {
  return (
    <div className='h-[100vh]'>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes> 
    </div>
  );
}

export default App;

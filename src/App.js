import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Fetching from './Fetching';
import Settings from './components/Settings';
import Homepage from './components/Homepage';
import PersonalProfile from './components/PersonalProfile';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<PersonalProfile/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/fetching/:handle" element={<Fetching />} />
    {/* <Route path='../components/Homepage.jsx' element={<Homepage />}></Route>
    <Route path='../components/Homepage.jsx' element={<Homepage />}></Route>
    <Route path='../components/Homepage.jsx' element={<Homepage />}></Route> */}

      {/* <Login/> */}
    </Routes>
    </>
    
  );
}

export default App;



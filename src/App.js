import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './css/Topbar.css'
import Login from './Login';
import Register from './Register';
import Fetching from './Fetching';
import Settings from './components/Settings';
import Homepage from './components/Homepage';
import PersonalProfile from './components/PersonalProfile';
//import Navbar from './components/Navbar';
import { Navbar } from './components/Navbar';
import Scheduling from './Scheduling';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const {user} = useAuthContext()

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={ !user? <Login/ > : <Homepage/> } />
    <Route path="/register" element={!user ? <Register /> : <Navigate to = "/" />  } />
    <Route path="/fetching" element={<Fetching />} />
    <Route path="/scheduling" element={<Scheduling />} />

    <Route path='/Settings' element={<Settings />}></Route>
    {/* <Route path='../components/Homepage.jsx' element={<Homepage />}></Route> */}
    <Route path='/PersonalProfile' element={<PersonalProfile />}></Route>

      {/* <Login/> */}
    </Routes>
    {/* </BrowserRouter> */}

    </>
    
  );
}

export default App;


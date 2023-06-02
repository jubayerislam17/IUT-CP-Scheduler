import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Fetching from './Fetching';
import Scheduling from './Scheduling';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const {user} = useAuthContext()

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={ !user? <Login /> : <Navigate to = "/fetching" /> } />
    <Route path="/register" element={!user ? <Register /> : <Navigate to = "/" />  } />
    <Route path="/fetching" element={<Fetching />} />
    <Route path="/scheduling" element={<Scheduling />} />


      {/* <Login/> */}
    </Routes>
    </>
    
  );
}

export default App;


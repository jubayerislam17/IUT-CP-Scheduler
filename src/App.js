import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Fetching from './Fetching';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/fetching/:handle" element={<Fetching />} />

      {/* <Login/> */}
    </Routes>
    </>
    
  );
}

export default App;



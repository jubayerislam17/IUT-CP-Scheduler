import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />

      {/* <Login/> */}
    </Routes>
    </>
    
  );
}

export default App;

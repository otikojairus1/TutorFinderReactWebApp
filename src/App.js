
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Sign_up from './pages/Sign_up';
import Dashboard from './pages/Dashboard';
import ViewDoctor from './pages/ViewDoctor';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create/account" element={<Sign_up />} />
      <Route path="/dashboard" element={< Dashboard />} />
      <Route path="/view/doctor" element={< ViewDoctor />} />
  </Routes>
  );
}

export default App;

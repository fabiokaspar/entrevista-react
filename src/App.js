import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Dashboard from './components/dashboard';
import Home from "./components/home";
import Users from "./components/users";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt, FaHome } from "react-icons/fa";;

function App() {
  return (
    <Router>
      <nav>
        <h3>Techplus</h3>
        <ul className='navLinks'>
          <Link to="/home">
            <li>
              <FaHome />
              <span style={{ marginLeft: '5px' }}>Home</span>
            </li>
          </Link>

          <Link to="/dashboard">
            <li>
              <MdDashboard />
              <span style={{ marginLeft: '5px' }}>Dashboard</span>
            </li>
          </Link>
          <Link to="/users">
            <li>
              <FaUserAlt />
              <span style={{ marginLeft: '5px' }}>Users</span>
            </li>
          </Link>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route element={<Home />} path="/home" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Users />} path="/users" />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

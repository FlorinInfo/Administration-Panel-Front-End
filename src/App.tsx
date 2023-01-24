import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Public from "./components/Public";
import Login from "./components/Login";
function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Public/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="dashboard" element={<DashboardLayout/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;

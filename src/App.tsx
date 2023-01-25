import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Public from "./Views/Public";
import Login from "./Views/Login";
import Welcome from "./Views/Welcome";
function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Public/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="dashboard" element={<DashboardLayout/>}>
                <Route index element={<Welcome/>}></Route>
            </Route>
        </Route>
      </Routes>
  );
}

export default App;

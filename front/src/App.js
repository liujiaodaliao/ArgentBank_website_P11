import { Routes, Route } from "react-router-dom";
import React from "react";
// import { useSelector } from 'react-redux'; // 导入useSelector来访问Redux store中的状态

import Home from "./pages/Home/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import Login from "./pages/Login/index";
import Profile from './pages/Profile/index';

import './App.css';

function App() {
  // const isConnected = useSelector((state) => state.auth.isConnected);
  // 需要补充redux

  return (
    <div>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/profile" element={isConnected ? <Profile /> : <Navigate to="/login" />} /> */}

            {/* 需要加报错页面吗 Error */}
          </Routes>
      <Footer />
    </div>
  );
}

export default App;

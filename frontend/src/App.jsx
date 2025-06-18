import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router'
import './css/App.css'

import DashboardPage from './DashboardPage';
import BoardDetailPage from './BoardDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/boards/:boardId" element={<BoardDetailPage />} />
    </Routes>
  )
}

export default App;

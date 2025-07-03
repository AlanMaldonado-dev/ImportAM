import { Button } from '@material-tailwind/react'
import React from 'react'
import Layout from './components/layout/Layout'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
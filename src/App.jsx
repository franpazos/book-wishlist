import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import AppRoutes from './routes/AppRoutes/AppRoutes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className='App'>

      <Navbar />
      <AppRoutes />

    </div>
  )
}

export default App
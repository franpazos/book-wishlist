import './App.css'
import NavBar from "./components/Navbar/Navbar.jsx"
import AppRoutes from './routes/AppRoutes/AppRoutes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className='App'>

      <NavBar />
      <AppRoutes />

    </div>
  )
}

export default App
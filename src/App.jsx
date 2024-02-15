import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import Homepage from "./pages/HomePage/HomePage.jsx"
import BookDetails from "./pages/BookDetails/BookDetails.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
    <Navbar/>
    <Homepage/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/book-details" element={<BookDetails/>}/>
    </Routes>
    </div>
  )
}

export default App
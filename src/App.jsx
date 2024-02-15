import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import Homepage from "./pages/HomePage/HomePage.jsx"
import Wishlist from "./pages/Wishlist/Wishlist.jsx"
import BookDetails from "./pages/BookDetails/BookDetails.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className='App'>

      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/wishlist/:bookId" element={<BookDetails />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </div>
  )
}

export default App
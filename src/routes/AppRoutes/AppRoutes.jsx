import { Route, Routes } from "react-router-dom"

import Homepage from "./../../pages/HomePage/HomePage.jsx"
import Wishlist from "./../../pages/Wishlist/Wishlist.jsx"
import BookDetails from "./../../pages/BookDetails/BookDetails.jsx"
import ErrorPage from "./../../pages/ErrorPage/ErrorPage.jsx"
import NewBookForm from "../../components/Forms/NewBookForm.jsx"

const AppRoutes = () => {

    return (

        < Routes >
            <Route path="/" element={<Homepage />} />
            <Route path="/add-book" element={<NewBookForm/>} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/wishlist/:bookId" element={<BookDetails />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes >
    )
}

export default AppRoutes
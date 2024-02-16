import Homepage from "./../../pages/HomePage/HomePage.jsx"
import Wishlist from "./../../pages/Wishlist/Wishlist.jsx"
import BookDetails from "./../../pages/BookDetails/BookDetails.jsx"
import ErrorPage from "./../../pages/ErrorPage/ErrorPage.jsx"


const AppRoutes = () => {

    return (

        < Routes >
            <Route path="/" element={<Homepage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/wishlist/:bookId" element={<BookDetails />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes >
    )
}

export default AppRoutes
import { useEffect, useState } from "react"
import axios from "axios"
import BookCard from "../../components/BookCards/BookCards"

const API_BASE_URL = "http://localhost:5005/wishlist    "

function Wishlist() {
    const [books, setBooks] = useState([])

    useEffect(() => loadBooks(), [])

    const loadBooks = () => {
        axios
            .get(`${API_BASE_URL}`)
            .then(({ data }) => setBooks(data))
            .catch(err => console.log(err))
    }
    return (
        <div className="Wishlist">
            <h1>My Book Wishlist</h1>
            {
                books.map((elm) => {
                    return (
                        <div className="bookCards" key={elm.id}>
                           <BookCard {...elm}/>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Wishlist
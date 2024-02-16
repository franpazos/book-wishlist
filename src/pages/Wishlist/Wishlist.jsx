import { useEffect, useState } from "react"
import axios from "axios"

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
                            <h2>My Books</h2>
                            <h3>{elm.title}</h3>
                            <img src={elm.cover} alt="book-img" />
                            <p>{elm.author.lastname}, {elm.author.name}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Wishlist
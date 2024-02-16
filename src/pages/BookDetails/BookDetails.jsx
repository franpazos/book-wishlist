import "./BookDetails.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5005"

const BookDetails = () => {

    const [book, setBook] = useState([])
    const { bookId } = useParams()

    const navigate = useNavigate()

    useEffect(() => loadBookDetails(), [])

    const loadBookDetails = () => {
        axios
            .get(`${API_BASE_URL}/wishlist/${bookId}`)
            .then(({ data }) => setBook(data))
            .catch(err => console.log(err))
    }

    const deleteBook = () => {

        axios
            .delete(`${API_BASE_URL}/wishlist/${bookId}`)
            .then(() => navigate('/wishlist'))
            .catch(err => console.log(err))
    }

    return (

        <div className="book-details">
            {book && (
                <>
                    <img src={book.cover} alt="Book Cover" />
                    <h3>{book.title}</h3>

                    {/* <button
                        className="btn btn-primary"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Back
                    </button> */}
                </>
            )}
        </div>

    )
}

export default BookDetails
import { useEffect, useState } from "react"
import axios from "axios"
import BookCard from "../../components/BookCards/BookCards"
import { Row, Col, Container } from "react-bootstrap";
import "./Wishlist.css"

const API_BASE_URL = "https://mybookwishlist-api.fly.dev"

function Wishlist() {
    const [books, setBooks] = useState([])

    useEffect(() => loadBooks(), [])

    const loadBooks = () => {
        axios
            .get(`${API_BASE_URL}/wishlist`)
            .then(({ data }) => setBooks(data))
            .catch(err => console.log(err))
    }

    const removeCard = (idToDelete) => {
        axios
            .delete(`${API_BASE_URL}/wishlist/${idToDelete}`)
            .then(() => {
                const filteredBooks = books.filter(elm => elm.id !== idToDelete);
                setBooks(filteredBooks);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="Wishlist">
            <h1>My Book Wishlist</h1>
            <Container>
                <Row>
                    {
                        books.map((elm) => {
                            return (
                                <Col key={elm.id} lg={4} md={6} className="mb-3">
                                    <BookCard {...elm} removeCard={removeCard} />
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Wishlist
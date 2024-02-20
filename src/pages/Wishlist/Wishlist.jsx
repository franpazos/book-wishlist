import { useEffect, useState } from "react"
import axios from "axios"
import BookCard from "../../components/BookCards/BookCards"
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Wishlist.css"
import { Link } from "react-router-dom";

const API_BASE_URL = "http://localhost:5005/wishlist"

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
                <Container>
                <Row>
            {
                books.map((elm) => {
                    return (
                        
                        <Col key={elm.id} lg={3} md={6}>
                         <article className="bookCards">
                             <Link to={`/wishlist/${elm.id}`} className="link-class">
                           <BookCard {...elm}/>
                           </Link>
                        </article>
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
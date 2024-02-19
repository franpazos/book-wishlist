import "./BookDetails.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, ToggleButton, ButtonGroup } from "react-bootstrap";

const API_BASE_URL = "http://localhost:5005"

const BookDetails = () => {

    const [book, setBook] = useState([])
    const { bookId } = useParams()

    const navigate = useNavigate()

    const [radioValue, setRadioValue] = useState(null);

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

    const handleStatusChange = (status) => {
        setReadStatus(status)
    }

    const radios = [
        { name: 'Reading', value: '1' },
        { name: 'Read', value: '2' },
    ]

    const { name, lastName } = book.author || {}
    const { publisher, year } = book.publishSpecs || {}

    return (

        <Container>

            <Row>

                <Col xs={6} md={4}>
                    <Image src={book.cover} alt="Book Cover" thumbnail className="book-cover" />
                </Col>

                <Col className="bookdetails">

                    <h3 className="title">{book.title}</h3>
                    <hr />
                    <h4 className="author">Written by {name} {lastName}</h4>
                    <p className="description">{book.description}</p>
                    <p>Language: {book.language}</p>
                    <p className="pages">Pages: {book.pages}</p>
                    <p>Published by {publisher} in {year}</p>

                    <Row>
                        <Col>

                            <div className="genres">
                                <strong>Genres:</strong>
                                <ul>
                                    {book.genres && book.genres.map((genre, index) => (
                                        <li key={index}>{genre}</li>
                                    ))}
                                </ul>
                            </div>

                        </Col>
                        <Col>

                            <div className="awards">
                                <strong>Awards:</strong>
                                <ul>
                                    {book.awards && book.awards.map((awards, index) => (
                                        <li key={index}>{awards}</li>
                                    ))}
                                </ul>
                            </div>

                        </Col>

                    </Row>

                    <Row className="buttons">

                        <Col>

                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-success' : 'outline-secondary'}
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>

                        </Col>

                    </Row>

                </Col>

            </Row>

        </Container>
    )
}

export default BookDetails
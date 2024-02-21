import "./BookDetails.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Image, ButtonGroup, Button } from "react-bootstrap"
import DeleteModal from "../../components/Modals/DeleteModal"

const API_BASE_URL = "http://localhost:5005"


const BookDetails = () => {

    const [book, setBook] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [modalShow, setModalShow] = useState(false)
    const { bookId } = useParams()

    useEffect(() => loadBookDetails(), [])
    useEffect(() => {
        !isLoading && updateBookStatus()
    }, [book.currentlyReading, book.beenRead])

    const loadBookDetails = () => {
        axios
            .get(`${API_BASE_URL}/wishlist/${bookId}`)
            .then(({ data }) => {
                setBook(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleReadingStatus = (e) => {
        const { name } = e.target
        setBook((prevBook) => ({
            ...prevBook,
            currentlyReading: name === 'currentlyReading' ? true : false,
            beenRead: name === 'beenRead' ? true : false,
        }))
    }

    const updateBookStatus = () => {
        axios
            .put(`${API_BASE_URL}/wishlist/${bookId}`, book)
            .then(() => console.log('ACTUALIZADO'))
            .catch(err => console.log(err))
    }

    const { name, lastName } = book.author || {}
    const { publisher, year } = book.publishSpecs || {}

    return (

        <Container>

            <Row className="mt-5">

                <Col xs={6} md={4}>
                    <Image src={book.cover} alt="Book Cover" thumbnail className="book-cover" />
                </Col>

                <Col md={{ offset: 1 }} className="bookdetails">

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
                                    {
                                        book.genres?.map((genre, index) => (
                                            <li key={index}>{genre}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </Col>
                        <Col>

                            <div className="awards">
                                <strong>Awards:</strong>
                                <ul>
                                    {
                                        book.awards?.map((awards, index) => (
                                            <li key={index}>{awards}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </Col>

                    </Row>

                    <hr />

                    <Row className="mt-5">

                        <Col md={{ span: 6 }}>

                            <ButtonGroup>

                                <Button
                                    variant={book.currentlyReading ? 'success' : 'secondary'}
                                    size="lg"
                                    name="currentlyReading"
                                    onClick={handleReadingStatus}
                                >
                                    Reading
                                </Button>

                                <Button
                                    variant={book.beenRead ? 'success' : 'secondary'}
                                    size="lg"
                                    name="beenRead"
                                    onClick={handleReadingStatus}
                                >
                                    Read
                                </Button>

                            </ButtonGroup>

                        </Col>

                        <Col>

                            <Button
                                size="lg"
                                style={
                                    {
                                        backgroundColor: '#638889',
                                        borderColor: '#638889'
                                    }
                                }>
                                Write a review!
                            </Button>

                        </Col>

                    </Row>

                    <Row className="mt-5">

                        <Col>

                            <Button
                                variant="danger"
                                size="lg"
                                onClick={() => setModalShow(true)}>
                                Delete
                            </Button>

                            <DeleteModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                bookId={bookId}
                            />

                        </Col>

                    </Row>

                </Col>

            </Row >

        </Container >
    )
}

export default BookDetails
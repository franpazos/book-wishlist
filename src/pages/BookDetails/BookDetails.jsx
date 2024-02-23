import "./BookDetails.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Image, ButtonGroup, Button, Offcanvas } from "react-bootstrap"
import DeleteModal from "../../components/Modals/DeleteModal"
import ReviewModal from "../../components/Modals/ReviewModal"
import StarRatings from "react-star-ratings"
import nobelPrize from "../../assets/nobelprize.png"

const API_BASE_URL = "https://mybookwishlist-api.fly.dev"


const BookDetails = () => {

    const [book, setBook] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [modalShow, setModalShow] = useState(false)
    const [reviewModalShow, setReviewModalShow] = useState(false)
    const [showOffCanvas, setShowOffCanvas] = useState(false)

    const { bookId } = useParams()

    useEffect(() => {
        loadBookDetails()
    }, [bookId])

    useEffect(() => {
        !isLoading && updateBookStatus()
    }, [book?.currentlyReading, book?.beenRead])

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

    const updateBookStatus = async () => {
        try {
            await axios.put(`${API_BASE_URL}/wishlist/${bookId}`, book)
            console.log('ACTUALIZADO')
        } catch (err) {
            console.error(err)
        }
    }

    const handleShowOffCanvas = () => setShowOffCanvas(true)
    const handleCloseOffCanvas = () => setShowOffCanvas(false)

    const { name, lastName, nobelAwarded, country, birth } = book.author || {}
    const { publisher, year } = book.publishSpecs || {}
    const { rating, comment } = book.reviewData || {}

    return (

        <Container>

            <Row className="mt-5">

                <Col xs={6} md={4}>
                    <Image src={book.cover} alt="Book Cover" thumbnail className="book-cover" />

                    <div className="reviewData">
                        <h3>Your rating:</h3>

                        <StarRatings
                            rating={rating}
                            starRatedColor="green"
                            numberOfStars={5}
                            name="rating"
                            starDimension="22px"
                        />

                        {comment && comment.length > 0 && (
                            <div>
                                <h3 className="mt-4">
                                    Your review:
                                </h3>
                                <p className="comment">
                                    "{comment}"
                                </p>
                            </div>
                        )}
                    </div>

                </Col>

                <Col md={{ offset: 1 }} className="bookdetails">

                    <h2 className="title">{book.title}</h2>
                    <hr />
                    <h3
                        className="mt-3, mb-3"
                        onClick={handleShowOffCanvas}>
                        Written by {name} {lastName}</h3>
                    <p className="description">{book.description}</p>
                    <p className="">Published by {publisher} in {year}</p>

                    <Row>

                        <Col><p><strong>Pages:</strong> {book.pages}</p></Col>
                        <Col><p><strong>Language:</strong> {book.language}</p></Col>

                    </Row>

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

                        <Col md={{ span: 5 }}>

                            <ButtonGroup>

                                <Button
                                    variant={book.currentlyReading ? 'success' : 'secondary'}
                                    size="mm"
                                    name="currentlyReading"
                                    onClick={handleReadingStatus}
                                >
                                    Reading
                                </Button>

                                <Button
                                    variant={book.beenRead ? 'success' : 'secondary'}
                                    size="mm"
                                    name="beenRead"
                                    onClick={handleReadingStatus}
                                >
                                    Read
                                </Button>

                            </ButtonGroup>

                        </Col>

                        <Col md={{ span: 5 }}>

                            {book.beenRead && (
                                <Button
                                    onClick={() => setReviewModalShow(true)}
                                    size="mm"
                                    style={{
                                        backgroundColor: '#638889',
                                        borderColor: '#638889'
                                    }}>
                                    Write a review!
                                </Button>
                            )}


                            <ReviewModal
                                show={reviewModalShow}
                                closeModal={() => setReviewModalShow(false)}
                                loadBook={loadBookDetails}
                                book={book} />

                        </Col>

                        <Col md={{ span: 1 }}>

                            <Button
                                variant="danger"
                                size="mm"
                                onClick={() => setModalShow(true)}>
                                Delete
                            </Button>

                            <DeleteModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                bookId={bookId}
                            />

                        </Col>
                        <div className="offcanvas">

                            <Offcanvas placement="end" show={showOffCanvas} onHide={handleCloseOffCanvas}>
                                <Offcanvas.Header className="header-offcanvas" closeButton>
                                    <Offcanvas.Title>Author Details</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="body-offcanvas">
                                    <div>
                                        <h3>{name} {lastName}</h3>
                                        <hr />
                                        <p>
                                            {name} {lastName} was born in {country} in {birth}
                                        </p>

                                        {nobelAwarded === true && (
                                            <div>
                                                <img src={nobelPrize} alt="Nobel Prize badge" />
                                                <h5>{name} {lastName} is a Nobel Prize winner!</h5>
                                            </div>


                                        )}

                                    </div>


                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>

                    </Row>

                </Col>

            </Row >

        </Container >
    )
}

export default BookDetails
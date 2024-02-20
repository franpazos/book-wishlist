import './NewBookForm.css'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col, InputGroup } from "react-bootstrap"
import { GENRES } from '../../consts/book.constants'
import { handleNewGenre } from '../../utils/book.utils'

const API_BASE_URL = "http://localhost:5005"


export default function NewBookForm() {

    const [bookData, setBookData] = useState({
        title: "",
        author: {
            name: "",
            lastName: "",
            nobelAwarded: false,
            country: "",
            birth: "",
        },
        genres: [],
        cover: "",
        description: "",
        pages: "",
        language: "",
        publishSpecs: {
            year: 0,
            publisher: "",
        },
        awards: [],
        beenRead: false,
        currentlyReading: false,
        reviewData: {
            rating: 0,
            comment: "",
            date: "",
        }
    })

    const navigate = useNavigate()

    const handleAddBook = e => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/wishlist`, bookData)
            .then(() => navigate('wishlist'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setBookData({ ...bookData, [name]: value })
    }

    const handleAuthorDetailsChange = e => {
        const { value, name, checked } = e.target
        const updatedValue = name === "nobelAwarded" ? checked : value
        setBookData({
            ...bookData,
            author: { ...bookData.author, [name]: updatedValue }
        })
    }

    const handlePublishSpecsChange = e => {
        const { value, name } = e.target
        setBookData({
            ...bookData,
            publishSpecs: { ...bookData.publishSpecs, [name]: value }
        })
    }

    const handleGenreChange = (event) => {
        const { name, checked } = event.target
        const updatedGenres = handleNewGenre(checked, name, [...bookData.genres])
        setBookData({ ...bookData, genres: updatedGenres })
    }

    const handleAwardsChange = (e, index) => {
        const { value } = e.target
        const updatedAwards = [...bookData.awards]
        updatedAwards[index] = value
        setBookData({
            ...bookData,
            awards: updatedAwards,
        })
    }

    return (

        <Form className='form' onSubmit={handleAddBook}>

            <Form.Group className="mb-5" controlId="title">
                <Form.Label className='title'>Title</Form.Label>
                <Form.Control
                    type="text"
                    value={bookData.title}
                    onChange={handleInputChange}
                    name={'title'}
                    placeholder="What is the title of the book?" />
            </Form.Group>

            <div className='author-details'>

                <h3>Author's information</h3>

                <InputGroup className="mt-3" as={Col} controlId="authorName">
                    <InputGroup.Text>First and Last Name</InputGroup.Text>
                    <Form.Control
                        type="text"
                        aria-label="First name"
                        value={bookData.author.name}
                        onChange={handleAuthorDetailsChange}
                        name={'name'} />
                    <Form.Control
                        type="text"
                        aria-label="Last name"
                        value={bookData.author.lastName}
                        onChange={handleAuthorDetailsChange}
                        name={'lastName'} />
                </InputGroup>

                <hr />

                <Form.Group as={Col} controlId="authorCountry">
                    <Form.Control
                        type="text"
                        placeholder="Which country is the author from?"
                        value={bookData.author.country}
                        onChange={handleAuthorDetailsChange}
                        name={'country'} />
                </Form.Group>

                <Form.Group as={Col} controlId="authorBirth">
                    <Form.Control
                        type="number"
                        placeholder="When were they born?"
                        value={bookData.author.birth}
                        onChange={handleAuthorDetailsChange}
                        name={'birth'} />
                </Form.Group>

                <hr />

                <Row className="mb-2">

                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Check
                            label="Did they win a Nobel Prize?"
                            type="switch"
                            id="nobel-switch"
                            value={bookData.author.nobelAwarded}
                            onChange={handleAuthorDetailsChange}
                            name={'nobelAwarded'} />
                    </Col>

                </Row>

            </div>


            <Form.Group as={Col} controlId="publisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Who published your edition?"
                    value={bookData.publishSpecs.publisher}
                    onChange={handlePublishSpecsChange}
                    name={'publisher'} />
            </Form.Group>

            <Form.Group as={Col} controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="What year was the book published?"
                    value={bookData.publishSpecs.year}
                    onChange={handlePublishSpecsChange}
                    name={'year'} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type='text'
                    placeholder="Add a description of the book"
                    value={bookData.description}
                    onChange={handleInputChange}
                    name={'description'} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cover">
                <Form.Label>Cover</Form.Label>
                <Form.Control
                    type='text'
                    placeholder="Enter URL of book cover"
                    value={bookData.cover}
                    onChange={handleInputChange}
                    name={'cover'} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPages">
                <Form.Label>Pages</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Number of pages"
                    value={bookData.pages}
                    onChange={handleInputChange}
                    name={'pages'} />
            </Form.Group>

            <Form.Group as={Col} controlId="language">
                <Form.Label>Language</Form.Label>
                <Form.Select
                    defaultValue="Choose..."
                    value={bookData.language}
                    onChange={handleInputChange}
                    name={'language'} >

                    <option>Spanish</option>
                    <option>English</option>
                    <option>Italian</option>
                    <option>French</option>

                </Form.Select>
            </Form.Group>



            <h4>Choose all the genres it belongs to:</h4>

            <Form.Group className="mb-3" controlId="genres">

                {
                    GENRES.map((genre, index) => (
                        <Form.Check
                            key={index}
                            inline
                            type="checkbox"
                            label={genre.label}
                            name={genre.name}
                            id={`inline-checkbox-${index}`}
                            value={bookData.genres.includes(genre.name)}
                            onChange={handleGenreChange}
                        />
                    ))
                }

            </Form.Group>


            <h4>Has this book won any awards? Add up to three:</h4>

            {[0, 1, 2].map((awardIndex) => (
                <Form.Group as={Col} controlId={`awards-${awardIndex}`} key={awardIndex}>
                    <Form.Control
                        type="text"
                        value={bookData.awards[awardIndex]}
                        onChange={(e) => handleAwardsChange(e, awardIndex)}
                        name={`awards-${awardIndex}`}
                    />
                </Form.Group>
            ))}


            <Button variant="success" size="lg" type="submit">
                Add new book
            </Button>

        </Form >

    )

}
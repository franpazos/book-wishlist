import './NewBookForm.css'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col, InputGroup } from "react-bootstrap"

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
        setBookData((prevBook) => {
            const nestedData = { ...prevBook }
            const nameArray = name.split('.')
            const updatedNestedData = nameArray.reduce((acc, key, index) => {
                if (index === nameArray.length - 1) {
                    acc[key] = value
                } else {
                    acc[key] = { ...acc[key] }
                }
                return acc[key]
            }, nestedData)

            return { ...prevBook, ...updatedNestedData }
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

                <Row className="mb-2">

                    <h3>Author's information</h3>

                    <InputGroup className="mt-3" as={Col} controlId="authorName">
                        <InputGroup.Text>First and Last Name</InputGroup.Text>
                        <Form.Control
                            type="text"
                            aria-label="First name"
                            value={bookData.author.name}
                            onChange={handleInputChange}
                            name={'author.name'} />
                        <Form.Control
                            type="text"
                            aria-label="Last name"
                            value={bookData.author.lastName}
                            onChange={handleInputChange}
                            name={'author.lastName'} />
                    </InputGroup>

                </Row>

                <Row className="mb-5">

                    <Form.Group as={Col} controlId="authorCountry">
                        <Form.Control
                            type="text"
                            placeholder="Which country is the author from?"
                            value={bookData.author.country}
                            onChange={handleInputChange}
                            name={'author.country'} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="authorBirth">
                        <Form.Control
                            type="number"
                            placeholder="When were they born?"
                            value={bookData.author.birth}
                            onChange={handleInputChange}
                            name={'author.birth'} />
                    </Form.Group>

                </Row>

                <Row className="mb-2">

                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Check
                            label="Did they win a Nobel Prize?"
                            type="switch"
                            id="nobel-switch"
                            value={bookData.author.nobelAwarded}
                            onChange={handleInputChange}
                            name={'author.nobelAwarded'} />
                    </Col>

                </Row>

            </div>

            <Row className="mb-3">

                <Form.Group as={Col} controlId="publisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Who published your edition?"
                        value={bookData.publishSpecs.publisher}
                        onChange={handleInputChange}
                        name={'publishSpecs.publisher'} />
                </Form.Group>

                <Form.Group as={Col} controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="What year was the book published?"
                        value={bookData.publishSpecs.year}
                        onChange={handleInputChange}
                        name={'publishSpecs.year'} />
                </Form.Group>

            </Row>

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

            <Row className="mb-3">

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

            </Row>

            <Row className='mt-4'>

                <h4>Choose all the genres it belongs to:</h4>

                <Form.Group className="mb-3" id="genres">
                    <div key="inline-checkbox" className='checkbox'>
                        <Form.Check
                            inline
                            label="Fiction"
                            type="checkbox"
                            id="inline-checkbox-1"
                            value={bookData.genres}
                            onChange={handleInputChange}
                            name={'genres'} />
                        <Form.Check
                            inline
                            label="Non-Fiction"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Historic"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-2"
                        />
                        <Form.Check
                            inline
                            label="Fantasy"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Mystery"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Comics"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Classic"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Poetry"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Romance"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Horror"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Drama"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Young Adult"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Humor"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Science"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="LGTBI"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Self Help"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Philosophy"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                        <Form.Check
                            inline
                            label="Biography"
                            name="genres"
                            type="checkbox"
                            id="inline-checkbox-3"
                        />
                    </div>
                </Form.Group>

            </Row>

            <Row className='mt-4 mb-5'>

                <h4>Has this book won any awards? Add up to three:</h4>

                <Form.Group as={Col} controlId="awards">
                    <Form.Control
                        type="text"
                        value={bookData.awards}
                        onChange={handleInputChange}
                        name={'awards'} />
                    <Form.Control
                        type="text"
                        value={bookData.awards}
                        onChange={handleInputChange}
                        name={'awards'} />
                    <Form.Control
                        type="text"
                        value={bookData.awards}
                        onChange={handleInputChange}
                        name={'awards'} />
                </Form.Group>

            </Row>

            <Row className="d-grid gap-2">

                <Button variant="success" size="lg" type="submit">
                    Add new book
                </Button>

            </Row>

        </Form>

    )

}
import './NewBookForm.css'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col, InputGroup } from "react-bootstrap"

function NewBookForm() {


    return (

        <Form className='form'>

            <Container>

                <Form.Group className="mb-5" controlId="formGridTitle">
                    <Form.Label className='title'>Title</Form.Label>
                    <Form.Control placeholder="What is the title of the book?" />
                </Form.Group>

                <Container className='author-details'>

                    <Row className="mb-2">

                        <h3>Author's information</h3>
                        <InputGroup className="mt-3" as={Col} controlId="formGridAuthorName">
                            <InputGroup.Text>First and last name</InputGroup.Text>
                            <Form.Control type="text" aria-label="First name" />
                            <Form.Control aria-label="Last name" />
                        </InputGroup>

                    </Row>

                    <Row className="mb-5">

                        <Form.Group as={Col} controlId="formGridAuthorCountry">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Which country is the author from?" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAuthorBirth">
                            <Form.Label></Form.Label>
                            <Form.Control type="number" placeholder="When were they born??" />
                        </Form.Group>

                    </Row>

                    <Row className="mb-2">

                        <Col md={{ span: 4, offset: 4 }}>
                            <Form.Check
                                label="Did they win a Nobel Prize?"
                                type="switch"
                                id="nobel-switch"
                            />
                        </Col>

                    </Row>

                </Container>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridPublisher">
                        <Form.Label>Publisher</Form.Label>
                        <Form.Control type="text" placeholder="Who published your edition?" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="number" placeholder="What year was the book published?" />
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Add a description of the book" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridCover">
                    <Form.Label>Cover</Form.Label>
                    <Form.Control placeholder="Enter URL of book cover" />
                </Form.Group>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridPages">
                        <Form.Label>Pages</Form.Label>
                        <Form.Control placeholder="Number of pages" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLanguage">
                        <Form.Label>Language</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Spanish</option>
                            <option>English</option>
                            <option>Italian</option>
                            <option>French</option>

                        </Form.Select>
                    </Form.Group>

                </Row>

                <Row className='mt-4'>

                    <h4>Choose all the genres it belongs to:</h4>

                    <Form.Group className="mb-3" id="formGenres">
                        <div key="inline-checkbox" className='checkbox'>
                            <Form.Check
                                inline
                                label="Fiction"
                                name="genres"
                                type="checkbox"
                                id="inline-checkbox-1"
                            />
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

                    <Form.Group as={Col} controlId="formGridAwards">
                        <Form.Control type="text" />
                        <Form.Control type="text" />
                        <Form.Control type="text" />
                    </Form.Group>

                </Row>

                <Row className="d-grid gap-2">

                    <Button variant="success" size="lg" type="submit">
                        Add new book
                    </Button>

                </Row>


            </Container>


        </Form>

    )

}

export default NewBookForm
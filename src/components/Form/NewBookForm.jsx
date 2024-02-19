import './NewBookForm.css'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col } from "react-bootstrap"

function NewBookForm() {


    return (

        <Form>

            <Form.Group className="mb-5" controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="What is the title of the book?" />
            </Form.Group>

            <Container className='author-details'>

                <Row className="mb-2">
                    <h3>Author`s information</h3>
                    <Form.Group as={Col} controlId="formGridAuthorName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Author's first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAuthorLastName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Do you know their last name?" />
                    </Form.Group>
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

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="success" type="submit">
                Add new book
            </Button>
        </Form>

    )

}

export default NewBookForm
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import NewBookForm from "./../../components/Form/NewBookForm"

const HomePage = () => {

    return (
        <div className="homepage">
            <h1>Add a new book to your Wishlist!</h1>

            <Container>
                <NewBookForm />
            </Container>



        </div>
    )
}

export default HomePage